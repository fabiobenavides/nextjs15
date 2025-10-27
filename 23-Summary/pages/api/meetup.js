import { MongoClient } from "mongodb";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const data = req.body;

        var result = await addMeetup(data);
        
        res.status(200).json({ message: "Meetup inserted" });
    }
}

async function addMeetup(data) {

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    var result = await meetupsCollection.insertOne(data);
    client.close();

    return result;
}
