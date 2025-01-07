'use client'

//error shows for any error in any page in the same level or in any child level

export default function ErrorPage() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data</p>
    </main>
  )
}
