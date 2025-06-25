import { connectToDatabase, insertDocument } from '../../../helpers/db-util';

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

  let client;
  try {
    // Validate the comment data  
    client = await connectToDatabase();
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({message: 'Could not connect to database.'});
    return;
  }

  try {
    
    // Insert the new comment
    await insertDocument(client, 'newsletter', {email});
    
  } catch (error) {

    console.error('Database insert failed:', error);
    res.status(500).json({message: 'Could not insert a new email.'});
    return;

  } finally {
    await client.close();
  }

  res.status(201).json({message: 'Success!'});
}