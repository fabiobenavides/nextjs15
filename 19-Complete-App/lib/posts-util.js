import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    
    const filePath = path.join(postsDirectory, fileName);
    const fileContentType = fs.readFileSync(filePath, 'utf-8');

    const fileContent = fs.readFileSync(filePath, fileContentType);

    const { data, content } = matter(fileContent);

    const postFlug = fileName.replace(/\.md$/, ''); // Remove the file extension

    const postData = {
        slug: postFlug,
        ...data,
        content
    };

    return postData;
}

function getAllPosts() {

    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(fileName => {
        return getPostData(fileName);
    });

    return allPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date);
    });
}