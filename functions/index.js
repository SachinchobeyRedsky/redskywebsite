const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { json } = require("express");
const cors = require("cors")({ origin: true });
const next = require("next");

admin.initializeApp();
const db = admin.firestore();
const blogDataRef = db.collection("blogData");
const blogSettingsRef = db.collection("blogSettings");

/** defining and destructuring environments config for firebase functions */
let { useremail, refreshtoken, clientid, clientsecret } =
  functions.config().gmail;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: useremail,
    clientId: clientid,
    // "50330301228-rb5iascbg50kr030o7blcfg4gopagtju.apps.googleusercontent.com",
    clientSecret: clientsecret,
    refreshToken: refreshtoken,
    // accessToken: "ya29.a0Ad52N384Ji9eFiSBuD8ptcOD518MW64qhDe_ouirbJtFokr-0wgBQNp_UC0fcjBAByeO8goWrZFJtZOAyXk7yME2KPHnnAF1p29-ABKiOtkOR1tuo6WHNbJ25cnebSdDpguKwikH2sPQM6BT-d_Jj2FEUrqqor7GnO67aCgYKAWsSARESFQHGX2MiybCeGOnCocmb1W-s9eX-3Q0171",
    // expires: "1484314697598",
  },
});
transporter.set("oauth2_provision_cb", (user, renew, callback) => {
  let accessToken = userTokens[user];
  if (!accessToken) {
    return callback(new Error("Unknown user"));
  } else {
    return callback(null, accessToken);
  }
});

exports.sendEmail = functions.firestore
  .document("carrierdata/{carrierId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `lenore.oconnell21@ethereal.email`,
      to: "lalitkumar.redsky@gmail.com",
      subject: `Carrier form message from ${snap.data().personalInfo.fullname}`,
      html: `<h1>Carrier Form Details</h1>
            <p> <b>name: </b>${snap.data().personalInfo.fullname} </p>
         <p> <b>Email: </b>${snap.data().personalInfo.email} </p>
         <p> <b>Date Of Birth: </b>${snap.data().personalInfo.date} </p>
         <p> <b>Contact No: </b>${snap.data().personalInfo.mobile} </p>
         <p> <b> Gender: </b>${snap.data().personalInfo.gender} </p>
         <p> <b> Address: </b>${snap.data().personalInfo.permanent} </p>
         <p> <b> Graduation: </b>${snap.data().eduInfo.grad} </p>
         <p> <b> College/Institute : </b>${snap.data().eduInfo.gradUni} </p>
         <p> <b> Post-Graduation: </b>${snap.data().eduInfo.postGrad} </p>
         <p> <b> College/Institute : </b>${snap.data().eduInfo.uniPostGrad} </p>
         <p> <b> Other : </b>${snap.data().eduInfo.other} </p>
         <p> <b> Facebook : </b>${snap.data().socialInfo.facebookID} </p>
         <p> <b> Instagram : </b>${snap.data().socialInfo.instaID} </p>
         <p> <b> LinkedIn : </b>${snap.data().socialInfo.linkedIn} </p>
         <p> <b> Skype : </b>${snap.data().socialInfo.skypeId} </p>
         <p> <b> Resume : </b>${snap.data().image} </p>`,
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return 0;
      }
      return data;
    });
  });
exports.sendEmail2 = functions.firestore
  .document("trainingdata/{trainigId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `lenore.oconnell21@ethereal.email`,
      to: "lalitkumar.redsky@gmail.com",
      subject: `Training form message from ${
        snap.data().personalInfo.fullname
      }`,
      html: `<h1>Training Form Details</h1>
            <p> <b>name: </b>${snap.data().personalInfo.fullname} </p>
            <p> <b>Email: </b>${snap.data().personalInfo.email} </p>
            <p> <b>Contact No: </b>${snap.data().personalInfo.mobile} </p>`,
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return 0;
      }
      return data;
    });
  });
exports.sendEmailContactForm = functions.firestore
  .document("ContactData/{ContactId}")
  .onCreate((snap, context) => {
    console.log(snap.data().personalInfo.email);
    const mailOptions = {
      from: `lenore.oconnell21@ethereal.email`,
      to: "lalitkumar.redsky@gmail.com",
      subject: `contact form message from ${snap.data().personalInfo.fullname}`,
      html: `<h1>Contact Form details</h1>
            <p> <b>Name: </b>${snap.data().personalInfo.fullname} </p>
            <p> <b>Email: </b>${snap.data().personalInfo.email} </p>
             <p> <b>Phone: </b>${snap.data().phone} </p>
            <p> <b>Type: </b>${snap.data().BudgetRange} </p>
            <p> <b>Feedback: </b>${snap.data().feedback} </p>
            <p> <b>File: </b>${snap.data().image} </p> `,
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return 0;
      }
      return data;
    });
  });

const CATEGORIES = ["ls", "edu", "entmt", "trv", "h&f", "tech"];

exports.scheduledFunction = functions.pubsub
  .schedule("59 23 * * *")
  .timeZone("Asia/Kolkata")
  .onRun(() => {
    blogDataRef.get().then((querySnapshot) => {
      blogSettingsRef.doc("blogs-counter").update({
        all: { count: querySnapshot.size, name: "All" },
      });
    });

    for (let index = 0; index < CATEGORIES.length; index++) {
      blogDataRef
        .where("category", "==", CATEGORIES[index])
        .then((querySnapshot) => {
          const categoryData = [];
          querySnapshot.forEach((doc) => {
            categoryData.push(doc.id);
          });
          blogSettingsRef.doc("blogs-counter").update({
            [CATEGORIES[index]]: {
              count: categoryData.length,
              name: CATEGORIES[index],
            },
          });
        });
    }

    db.collection("draftsBlogData")
      .get()
      .then((querySnapshot) => {
        db.collection("blogSettings").doc("drafts-counter").update({
          count: querySnapshot.size,
        });
      });

    return null;
  });
