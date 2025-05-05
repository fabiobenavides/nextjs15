import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

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
        return <p className="center">Invalid filter. Please adjust your values!</p>;
    }

    const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">No events found for the chosen filter!</p>;
    }
    console.log("filteredEvents:", filteredEvents);
    
  return (
    <EventList items={filteredEvents} />
  )
}
