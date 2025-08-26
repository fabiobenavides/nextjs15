import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
  

    if (req.method !== 'POST') {
        return;
    }

    const { email, password } = req.body;

    const client = await connectToDatabase();
    const db = client.db();
}