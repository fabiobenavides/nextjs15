
import MeetupDetail from "../../components/meetups/MeetupDetail";

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
  //fetch data from an API
  //...
 return { 
  props: {
    meetupData: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",  
      id: meetupId,
      title: "A First Meetup",
      address: "Some address 5, 12345 Some City",
      description: "This is a first meetup",
    }
  }}
} 

export async function getStaticPaths() {
  //fetch all meetups
  //...
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
    ]
  }
}
