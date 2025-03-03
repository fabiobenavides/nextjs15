import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function NewImage({params}) {

    const details = await getNewsItem(params.id);
    if (!details) {
        notFound();
    }

  return (
    <div className="fullscreen-image">
        <img src={`/images/news/${details.image}`} alt={details.title} />
    </div>
  )
}
