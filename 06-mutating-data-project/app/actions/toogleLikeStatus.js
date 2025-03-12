"use server"

import { updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";

export default async function toogleLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/feed');
}
