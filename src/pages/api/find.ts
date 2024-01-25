import { NextApiRequest, NextApiResponse } from "next";
import { Art } from ".././../Schema/index"


export default async function handler(req:NextApiRequest,res:NextApiResponse)
{
    if(req.method=='POST')
    {
        const {id} =req.body
        const foundArt= await Art.findById(id)
        if(foundArt)
        {
            res.json({foundArt})
            console.log("found art")

        }
      res.send("no art available")
    }
}