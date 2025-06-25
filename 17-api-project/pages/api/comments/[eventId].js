import { connectToDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util';

export default async function handler(req, res) {

  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    await processComment(eventId, req, res);
  } else if (req.method === 'GET') {
    processGetcomment(eventId, req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}

async function processComment(eventId, req, res) {

  const { email, name, text } = req.body;
  
  if (!email || !email.includes('@') || !name || !text) {
    res.status(422).json({message: 'Invalid input.'});
    return;
  }
  
  console.log(eventId, email, name, text);
  const newComment = {
    email,
    name,
    text,
    eventId
  };

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
    const result = await insertDocument(client, 'comments', newComment);
    newComment._id = result.insertedId.toString()
    
  } catch (error) {

    console.error('Database insert failed:', error);
    res.status(500).json({message: 'Could not insert a new comment.'});
    return;

  } finally {
    await client.close();
  }
  
  res.status(201).json({message: 'Success!', comment: newComment});
}

async function processGetcomment(eventId, req, res) {
  
  let client;
  try {
    // Validate the comment data  
    client = await connectToDatabase();
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({message: 'Could not connect to database.'});
    return;
  }

  let results;
  try {
    results = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId: eventId });
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({message: 'Could not retrieve comments.'});
    return;
  } finally {
    await client.close();
  }  

  res.status(200).json({ comments: results });
}