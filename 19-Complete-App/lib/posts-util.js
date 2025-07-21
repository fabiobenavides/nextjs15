import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postId) {
    
    const postFlug = postId.replace(/\.md$/, ''); // Remove the file extension

    const filePath = path.join(postsDirectory, `${postFlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);
    
    const postData = {
        slug: postFlug,
        ...data,
        content
    };

    return postData;
}

export function getPostsFiles() {
    const postFiles = fs.readdirSync(postsDirectory);
    //console.log('Post files:', postFiles);
    return postFiles;
}

export function getAllPosts() {

    const postFiles = getPostsFiles();

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