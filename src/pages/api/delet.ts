import { NextApiRequest, NextApiResponse } from "next";
import { Art } from "../../Schema/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'Invalid ID' });
      }
      const deletedArt = await Art.findByIdAndDelete(id);
      if (!deletedArt) {
        return res.status(404).json({ error: 'Art not found' });
      }
      res.status(200).json({ message: 'Art deleted successfully' });
    } catch (error) {
      console.error('Error deleting art:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
