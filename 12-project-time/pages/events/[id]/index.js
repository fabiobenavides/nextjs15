import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data'
import { Fragment } from 'react';
import EventSummary from '../../../components/event-detail/event-summary';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventContent from '../../../components/event-detail/event-content';
import ErrorAlert from '../../../components/ui/error-alert';
import ButtonLink from '../../../components/ui/button-link';

export default function index() {

    const router = useRouter();
    const { id } = router.query;

    const details = getEventById(id);
    if (!details) {
        return (
          <Fragment>
            <ErrorAlert>
              <p>No event found!</p>
            </ErrorAlert>
            <div className="center">
              <ButtonLink link="/events">Show all events</ButtonLink>
            </div>
          </Fragment>
        );
    }

  return (
    <Fragment>
      <EventSummary title={details.title} />
      <EventLogistics date={details.date}
        address={details.location}
        image={details.image}
        imageAlt={details.title} 
      />
      <EventContent>
        <p>{details.description}</p>
      </EventContent>
    </Fragment>
  )
}
