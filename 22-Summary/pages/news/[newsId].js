
import { useRouter } from 'next/router'

export default function NewsDetail() {

    const router = useRouter()
    const newsId = router.query.newsId

    console.log(newsId)

  return (
    <div>Detail page for {newsId}</div>
  )
}
