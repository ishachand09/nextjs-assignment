"use client";

import Link from "next/link";

const categories = [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Tops", href: "/tops" },
    { name: "Bottoms", href: "/bottoms" },
    { name: "Dresses", href: "/dresses" },
    { name: "Outerwear", href: "/outerwear" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale" },
];

export default function ClothingDropdown() {
    return (
        <div className="absolute top-full left-0 w-48 bg-white border border-stone-300 shadow-xl z-50 transform origin-top transition-all duration-200 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2">
            <ul className="flex flex-col">
                {categories.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="block px-4 py-3 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
