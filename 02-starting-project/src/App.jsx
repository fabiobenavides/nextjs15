import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList 
          modalIsVisible={modalIsVisible} 
          onHideModal={hideModalHandler} 
        />
      </main>
    </>
  )
}
