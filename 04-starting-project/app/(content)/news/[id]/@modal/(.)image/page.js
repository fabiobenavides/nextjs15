"use client"

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function NewImage({params}) {

    const router = useRouter();
    const selectedItem = React.use(params);
    const details = DUMMY_NEWS.find(item => item.slug === selectedItem.id);
    if (!details) {
        notFound();
    }

  return (
    <>
        <div className="modal-backdrop" onClick={router.back}/>
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${details.image}`} alt={details.title} />
            </div>
        </dialog>
    </>
  )
}
