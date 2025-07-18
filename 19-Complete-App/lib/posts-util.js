import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    
    const filePath = path.join(postsDirectory, fileName);

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postFlug = fileName.replace(/\.md$/, ''); // Remove the file extension

    const postData = {
        slug: postFlug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {

    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(fileName => {
        return getPostData(fileName);
    });

    return allPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date);
    });
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.isFeatured);
}