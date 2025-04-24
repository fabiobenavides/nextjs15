import { useRouter } from 'next/router';

export default function index() {

    const router = useRouter();
    const { id } = router.query;

  return (
    <div>
      <h1>Events specific page</h1>
      <p>Event ID: {id}</p>
      <p>Event Name: Dummy data</p>
    </div>
  )
}
