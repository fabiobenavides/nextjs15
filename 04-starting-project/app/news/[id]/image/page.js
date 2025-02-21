import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewImage({params}) {

    const details = DUMMY_NEWS.find(item => item.slug === params.id);
    if (!details) {
        notFound();
    }

  return (
    <div className="fullscreen-image">
        <img src={`/images/news/${details.image}`} alt={details.title} />
    </div>
  )
}
