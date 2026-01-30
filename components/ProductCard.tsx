"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: string | number;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    onAddToCart?: () => void;
}

export default function ProductCard({ id, title, price, image, rating, onAddToCart }: ProductCardProps) {
    return (
        <div className="group relative bg-white border border-stone-200 hover:shadow-lg transition-shadow duration-300 text-stone-700 flex flex-col">
            <Link href={`/product/${id}`} className="flex-1">
                {/* Product Image */}
                <div className="relative h-64 flex items-center justify-center p-6 bg-white">
                    <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Product Info */}
                <div className="p-4">
                    {/* Title */}
                    <h3 className="mb-2 line-clamp-2 min-h-12 text-center">
                        {title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3 justify-center">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-4 h-4 ${index < Math.floor(rating.rate)
                                        ? 'text-yellow-500'
                                        : 'text-stone-300'
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-stone-500">({rating.count})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-center">
                        <span className="text-base">${price.toFixed(2)}</span>
                    </div>
                </div>
            </Link>

            {onAddToCart && (
                <div className="p-4 pt-0">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onAddToCart();
                        }}
                        className="w-full bg-stone-800 text-white py-2 rounded hover:bg-stone-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
}
