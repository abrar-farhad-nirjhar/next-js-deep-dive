import { fetchPost } from "@/app/libs/api"

type Params = { id: number }


type PostPageProps = {
    params: Params
}

export const dynamic = 'force-dynamic';

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const post = await fetchPost(id)
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-2">{post.body}</p>
        </main>
    )
}