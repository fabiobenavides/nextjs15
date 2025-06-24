import { MongoClient } from "mongodb";

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

  // Connect to MongoDB
  const client = await MongoClient.connect("mongodb+srv://fabiobenavides:38jDrbs9G8fUdfSV@fbreactcluster0.uhi0mzv.mongodb.net/events?retryWrites=true&w=majority&appName=FBReactCluster0"); //events 

  console.log('Connected to MongoDB');
  // Use the database
  const db = client.db(); 
  // Use the collection
  const collection = db.collection('comments');  
  const result = await collection.insertOne(newComment);

  newComment.id = result.insertedId.toString();

  await client.close();
  res.status(201).json({message: 'Success!', comment: newComment});
}

async function processGetcomment(eventId, req, res) {
  
  // Connect to MongoDB
  const client = await MongoClient.connect(); //events 

  console.log('Connected to MongoDB');
  // Use the database
  const db = client.db(); 
  // Use the collection
  const collection = db.collection('comments');  

  const results = await collection
    .find({eventId: eventId})
    .sort({ _id: -1 })
    .toArray();


  res.status(200).json({ comments: results });
}