"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { addToCart } = useCart();

    const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="my-container py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 border border-stone-300 focus:outline-none"
                    />
                </div>

                {/* Category Filter */}
                <div className="w-full md:w-1/4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-2 border border-stone-300 focus:outline-none bg-white"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                            onAddToCart={() => addToCart(product)}
                        />
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="text-center py-20 text-stone-500">
                    <p className="text-xl">No products found.</p>
                    <p>Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
}
