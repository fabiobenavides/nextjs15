import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
      fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/events.json')
          .then(response => response.json())
          .then(data => {
              for (const key in data) {
                  if (data[key].id === eventId) {
                      setEvent({
                          id: key,
                          title: data[key].title,
                          description: data[key].description,
                          location: data[key].location,
                          date: data[key].date,
                          image: data[key].image,
                          isFeatured: data[key].isFeatured
                      });
                  }
              }
              setIsLoading(false);
          });
  }, []);

  if (isLoading) {
      return <p>Loading...</p>;
  }

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
