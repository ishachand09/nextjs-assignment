'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';


interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <>
            <AdminHeader />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                        <Link
                            href="/admin/add-product"
                            className="inline-flex items-center px-4 py-2 border border-transparent font-medium text-white bg-blue-900 hover:bg-blue-950 focus:outline-none transition-colors"
                        >
                            Add New Product
                        </Link>
                    </div>

                    {products.length === 0 ? (
                        <div className="text-center py-12 bg-white shadow">
                            
                            <h3 className="mt-2 font-medium text-gray-900">No products</h3>
                            <p className="mt-1 text-sm text-gray-500">Get started by creating a new product.</p>
                            <div className="mt-6">
                                <Link
                                    href="/admin/add-product"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-950 focus:outline-none transition-colors"
                                >
                                    Add Product
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 relative h-48">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={product.imageUrl}
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=No+Image';
                                            }}
                                        />
                                        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-gray-600 shadow-sm">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium text-gray-900 truncate" title={product.title}>
                                            {product.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2 h-10">
                                            {product.description}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
