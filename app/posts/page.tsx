import { fetchPosts } from "../libs/api";
import { Post } from "../libs/types";


export const revalidate = 5; // Revalidate this page every 5 seconds

export default async function PostsPage() {
    const posts = await fetchPosts();

    const postList = posts.map((post: Post) => {
        return <li key={post.id} className="border-b border-gray-300 py-4">
            <a href={`/posts/${post.id}`} className="block hover:bg-gray-100 p-2 rounded">
                <p className="mt-1 text-gray-700">{post.title}</p>
            </a>
        </li>
    })

    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {postList}
            </ul>
        </main>
    )
}