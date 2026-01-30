import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-8">Page Not Found</h2>
            <p className="mb-8 text-stone-600">Could not find requested resource</p>
            <Link
                href="/"
                className="px-6 py-3 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
