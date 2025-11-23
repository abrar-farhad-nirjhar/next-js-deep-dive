import { Post } from "./types";

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "force-cache" });
    const posts: Post[] = await response.json();
    return posts;
}

export async function fetchPost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
    const post: Post = await response.json();
    return post;
}

export async function createPost(data: Omit<Post, 'id'>): Promise<any> {
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function fetchSamplePost(): Promise<Post> {
    const response = await fetch('/api/posts', { cache: "no-store" });
    const post: Post = await response.json();
    return post;
}