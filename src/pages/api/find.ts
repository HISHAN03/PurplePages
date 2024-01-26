import { NextApiRequest, NextApiResponse } from "next";
import { Art } from ".././../Schema/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { id } = req.body;
      const foundArt = await Art.findById(id);

      if (foundArt) {
        res.json({ foundArt });
        console.log("found art");
      } else {
        res.status(404).json({ error: "Art not found" });
      }
    } catch (error) {
      console.error("Error finding art", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
