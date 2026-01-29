'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
    });
    const [status, setStatus] = useState({ loading: false, error: '', success: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, error: '', success: '' });

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit product');
            }

            setStatus({ loading: false, error: '', success: 'Product added successfully!' });
            setFormData({
                title: '',
                description: '',
                price: '',
                category: '',
                imageUrl: '',
            });

        } catch (error) {
            setStatus({ loading: false, error: 'Something went wrong. Please try again.', success: '' });
        }
    };

    return (
        <>
            <AdminHeader />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full mx-auto space-y-8 bg-white p-8 shadow-lg border border-gray-100">
                    <div>
                        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                            Add New Product
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Enter the details of the product you want to add to the store.
                        </p>
                    </div>

                    {status.success && (
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4  animate-fade-in-down">
                            <div className="flex">
                                <div className="shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700 font-medium">
                                        {status.success}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {status.error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4  animate-fade-in-down">
                            <div className="flex">
                                <div className="shrink-0">
                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700 font-medium">
                                        {status.error}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="-space-y-px">
                            {/* Title */}
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
                                    placeholder="Product Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows={3}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
                                    placeholder="Detailed description of the product"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    step="0.01"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <input
                                    id="category"
                                    name="category"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm transition duration-150 ease-in-out bg-white"
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                            </div>


                            {/* Image URL */}
                            <div className="mb-4">
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="url"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
                                    placeholder="https://example.com/image.jpg"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium text-white bg-blue-900 hover:bg-blue-950 focus:outline-none transition-all duration-200 ${status.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {status.loading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Saving...
                                    </span>
                                ) : (
                                    'Add Product'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
