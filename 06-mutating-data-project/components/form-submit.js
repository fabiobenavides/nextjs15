"use client";

import { useFormStatus } from "react-dom"

export default function FormSubmit() {

  //this component should be use between the open <form> and close </form>
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
        <button type="reset">Reset</button>
        <button>Create Post</button>
    </>
  )
}
