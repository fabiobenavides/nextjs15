import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
    
  )
}
