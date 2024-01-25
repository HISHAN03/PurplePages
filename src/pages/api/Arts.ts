import type { NextApiRequest, NextApiResponse } from 'next'
import { Art } from ".././../Schema/index"
import dbconnect from './dbconnect';
dbconnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) 
{
    if (req.method === 'GET') {
        try {
            const arts = await Art.find({});
            res.json({arts});
        } catch (error) {
            console.error('Error fetching art:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    else if (req.method === 'POST') {
        try {
            const art = new Art(req.body);
            console.log(art)
            await art.save();
            res.json({ message: 'Art Created successfully' });
        } catch (error) {
            console.error('Error creating and saving art:', error);
            res.status(500).json({ error: 'Internal Server Error' });

        }
    }

}