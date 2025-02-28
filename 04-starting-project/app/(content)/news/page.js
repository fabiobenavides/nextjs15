import NewsList from '@/components/news-list'
import { getAllNews } from '@/lib/news'

export default async function NewsPage() {

  const news = await getAllNews();

  return (
    <>
        <h1>Welcome to my News Page</h1>
        <NewsList news={news} />
    </>
  )
}
