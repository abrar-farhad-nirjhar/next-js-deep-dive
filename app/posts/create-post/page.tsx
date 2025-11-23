'use client';

import { createPost, fetchSamplePost } from "@/app/libs/api";
import { FormEvent, useEffect, useState } from "react";

export default function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        const response = await fetchSamplePost();
        console.log("Fetched post:", response);
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await createPost({ title, body });
        console.log("Server response:", response);
        setTitle("");
        setBody("");
    }

    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create Post
                </button>
            </form>
        </main>
    )
}