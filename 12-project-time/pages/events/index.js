import Link from 'next/link'
import { getAllEvents } from '../../dummy-data'

export default function index() {

    const data = getAllEvents();


  return (
    <div>
      <h1>Events page</h1>
      <ul>
        {data.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
