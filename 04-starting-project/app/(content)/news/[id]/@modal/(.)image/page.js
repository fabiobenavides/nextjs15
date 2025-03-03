import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

export default async function NewImage({params}) {
    
    //const selectedItem = React.use(params);
    const details = await getNewsItem(params.id);
    if (!details) {
        notFound();
    }

  return (
    <>
        <ModalBackdrop />
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${details.image}`} alt={details.title} />
            </div>
        </dialog>
    </>
  )
}
