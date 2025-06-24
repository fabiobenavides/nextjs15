import { MongoClient } from 'mongodb';

export default function handler(req, res) {

  if (req.method === 'POST') {
    processNewsletter(req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}

async function processNewsletter(req, res) {
  const email = req.body.email;

  if (!email || !email.includes('@')) {
    res.status(422).json({message: 'Invalid email address!'});
    return;
  }

  console.log(email);
  const newNewsletter = {
    id: new Date().toISOString(),
    email
  }

  // Connect to MongoDB
  const client = await MongoClient.connect(); //events

  console.log('Connected to MongoDB');
  // Use the database
  const db = client.db(); 
  // Use the collection
  const collection = db.collection('newsletter');  
  // Insert the new newsletter entry
  await collection.insertOne({email});

  console.log('Newsletter entry added');
  // Close the connection
  await client.close();
  console.log('MongoDB connection closed');

  res.status(201).json({message: 'Success!', newsletter: newNewsletter});
}