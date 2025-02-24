'use client';

export default function FilterError({error}) {
  return (
    <div id="error">
        <h2>There is an error!</h2>
        <p>{error.message}</p>
    </div>
  )
}
