import { useRouter } from "next/router"

export default function ClientProjects() {

    const router = useRouter();
    console.log("router:", router.query);
    
    function loadProjectHandler() {
        // load data...
        // router.push('/clients/[id]/[clientprojectid]', '/clients/max/project-a')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientProjectId: 'project-a' }
        })
    }

  return (
    <div>
      <h1>Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
