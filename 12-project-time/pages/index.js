import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </div>
    
  )
}
