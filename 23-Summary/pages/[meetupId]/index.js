
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "mongodb";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
  )
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  //fetch data from the database
  const client = await connectToDatabase();
  const db = client.db();
  const meetup = await db.collection('meetups')
      .findOne({_id: new ObjectId(meetupId)});
  client.close();

  //...
 return { 
  props: {
    meetupData: {
      image: meetup.image,  
      id: meetupId,
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
    }
  }}
} 

export async function getStaticPaths() {
  //fetch all meetups
  const client = await connectToDatabase();
  const db = client.db();
  const meetups = await db.collection('meetups')
      .find({}, { _id: 1 })
      .toArray();
  client.close();

  var paths = meetups.map(meetup => ({
    params: { meetupId: meetup._id.toString() }
  }));

  //...
  return {
    fallback: false,
    paths: paths
  }
}
