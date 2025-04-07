import { useRouter } from 'next/router';

export default function ClientProjectDetail() {

    const router = useRouter();
    const { id, clientProjectId } = router.query;
    console.log("id:", id);
    console.log("clientprojectid:", clientProjectId);
    console.log("query:", router.query);

  return (
    <div>Client Project Detail Page</div>
  )
}
