import { MongoClient } from "mongodb";

async function connectToDatabase() {
  // Connect to MongoDB
  const client = await MongoClient.connect(""); //events 
  return client;
}

async function insertDocument(client, collectionName, document) {
  // Use the database
  const db = client.db(); 
  // Use the collection
  const collection = db.collection(collectionName); 
  const result = await collection.insertOne(document);

  return result;
}

async function getAllDocuments(client, collectionName, sort) {
    // Use the database
    const db = client.db(); 
    // Use the collection
    const collection = db.collection(collectionName);  
    const documents = await collection.find().sort(sort).toArray();
    
    return documents;
}

export { connectToDatabase,
    insertDocument,
    getAllDocuments};