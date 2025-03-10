"use server"

import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export async function createPost(prevState, formData) {
    const title = formData.get('title'); //name of the input
    const image = formData.get('image'); //name of the input
    const content = formData.get('content'); //name of the input

    let errors = [];

    if (!title || title.trim().length === 0) {
        errors.push("Title is required");
    }

    if (!content || content.trim().length === 0) {
        errors.push("Content is required");
    }

    if (!image || image.size === 0) {
        errors.push("Image is required");
    }

    if (errors.length > 0) {
        return { errors };
    }

    console.log(title, image, content);

    await storePost({
        imageUrl: '',
        title,
        content,
        userId: 1
    });

    redirect('/feed');
}