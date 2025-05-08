import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import ButtonLink from "../../components/ui/button-link";
import ErrorAlert from "../../components/ui/error-alert";

export default function CatchAllPage() {

    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = slug[0];
    const filteredMonth = slug[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2022 || numMonth < 1 || numMonth > 12) {
        return (
          <Fragment>
            <ErrorAlert>
              <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className="center">
              <ButtonLink link="/events">Show all events</ButtonLink>
            </div>
          </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
          <Fragment>
            <ErrorAlert>
              <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
              <ButtonLink link="/events">Show all events</ButtonLink>
            </div>
          </Fragment>
        );
    }
    console.log("filteredEvents:", filteredEvents);
    
  return (
    <Fragment>
        <ResultsTitle date={new Date(numYear, numMonth - 1)} />
        <EventList items={filteredEvents} />
    </Fragment>
    
  )
}
