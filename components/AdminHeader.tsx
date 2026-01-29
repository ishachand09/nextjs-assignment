'use client';
import Link from 'next/link';

export default function AdminHeader() {
    return (
        <div className="my-container py-8 bg-blue-950 shadow-lg text-white text-center">
            <Link href="/admin" className="text-3xl font-bold">Admin Dashboard</Link>
        </div>
    );
}