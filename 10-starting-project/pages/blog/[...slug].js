import { useRouter } from "next/router";


export default function CatchAllPage() {

    const router = useRouter();
    console.log("router:", router.query);
    
  return (
    <div>Catch All Page</div>
  )
}
