import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await sendContactData(req, res);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function sendContactData(req, res) {
    const { email, name, message } = req.body;

    if (!email || !name || !message
        || !email.includes('@') || name.trim() === '' || message.trim() === ''
    ) {
        return res.status(422).json({ message: 'Invalid input' });
    }

    // Here you would typically handle the form submission, e.g., save to a database or send an email
    console.log('Contact Form Submission:', { email, name, message });

    let client;

    try {
        client = await MongoClient.connect(process.env.MONGODB_URI);
        client.connect();
    } catch (error) {
        console.error('Database connection failed:', error);
        return res.status(500).json({ message: 'Database connection failed' });
    }
    
    const db = client.db();

    try {
            const result = await db.collection('contact').insertOne({
                email,
                name,
                message,
                createdAt: new Date()
        });

    } catch (error) {
        console.error('Failed to insert message:', error);
        return res.status(500).json({ message: 'Failed to insert message' });
    }
    
    client.close();

    res.status(201).json({ message: 'Message sent successfully!' });
}
