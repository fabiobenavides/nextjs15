import NewsList from '@/components/news-list'
import { getNewsForYear } from '@/lib/news';

export default function ArchiveYear({params}) {

    const newsYear = params.year;

    const news = getNewsForYear(newsYear);

    if (!news) return <p>No news found for year {newsYear}</p>

  return (
    <NewsList news={news} />
  )
}
