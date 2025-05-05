import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

export default function index() {

    const allEvents = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  )
}
