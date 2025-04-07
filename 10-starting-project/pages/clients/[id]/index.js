import { useRouter } from "next/router"

export default function ClientProjects() {

    const router = useRouter();
    console.log("router:", router.query);
    

  return (
    <div>Client Projects Page</div>
  )
}
