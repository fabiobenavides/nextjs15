import NewsList from '@/components/news-list'

export default async function NewsPage() {

  const response = await fetch('http://localhost:8080/news'); 
  const news = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  return (
    <>
        <h1>Welcome to my News Page</h1>
        <NewsList news={news} />
    </>
  )
}
