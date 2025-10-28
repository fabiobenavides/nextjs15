import MeetupList from "../components/meetups/MeetupList"
import { useState, useEffect } from "react";
import { connectToDatabase } from "../lib/db";

export async function getStaticProps() {

  const client = await connectToDatabase();
  var db = client.db();
  const meetups = await db.collection('meetups')
    .find()
    .toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function IndexPage({ meetups }) {

  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(meetups);
  }, []);

  return (
    <MeetupList meetups={loadedMeetups} />
  );
}
