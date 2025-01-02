import { getAuth, signOut } from "firebase/auth";
export const signOutUser = (router) => {
  if (!router) {
    return;
  }
  signOut(getAuth())
    .then(() => {
      if (router.asPath === "/blog/addBlog") {
        router.push("/blog");
      } else {
        location.reload();
      }
    })
    .catch(() => {
      alert("unable to sign out");
    });
};
