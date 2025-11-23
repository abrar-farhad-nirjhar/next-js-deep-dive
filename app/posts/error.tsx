'use client';

type ErrorProps = {
    error: Error;
}

export default function ErrorPage({ error }: ErrorProps) {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
            <p className="mt-2 text-red-500">{error.message}</p>
        </main>
    )
}