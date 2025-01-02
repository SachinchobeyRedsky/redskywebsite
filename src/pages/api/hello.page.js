// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 

// import { blogs } from "../../../data/bolgs"

export default function handler (req ,  res){
res.status(200).json([{name:"This is working "},{name:"This "}, {name:"blog three"}])
}