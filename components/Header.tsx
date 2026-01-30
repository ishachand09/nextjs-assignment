"use client";

import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import ClothingDropdown from './ClothingDropdown';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="my-container py-1.5 bg-stone-200 text-stone-700 flex items-center justify-center">
        <p className="text-xs md:text-sm">Proudly made in US with beautiful Italian Fabrics | Free US Shipping</p>
      </div>
      <div className="my-container py-6 flex justify-between items-center relative">

        <div className="text-stone-600 text-sm">
          <p>Customer Service : <span className="underline">123-456-7890</span></p>
        </div>

        <Link href="/" className="absolute left-[45%] text-2xl font-bold text-stone-800 hover:text-stone-900 transition-colors tracking-[1rem] uppercase">
          MyApp
        </Link>

        <div className="flex items-center space-x-4">

          <button className="text-stone-700 hover:text-stone-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <Link href="/account" className="text-stone-700 hover:text-stone-900 transition-colors">
            <User className="w-5 h-5" />
          </Link>

          <Link href="/cart" className="text-stone-700 hover:text-stone-900 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </div>

      <nav className="my-container text-base">
        <ul className="flex gap-6 justify-center">
          <li className="p-3 hover:bg-stone-100 transition-colors group relative">
            <Link href="/" className="text-stone-700 transition-colors">
              All Clothings
            </Link>
            <ClothingDropdown />
          </li>
          <li className="p-3 hover:bg-stone-100 transition-colors">
            <Link href="/" className="text-stone-700 transition-colors">
              Brands
            </Link>
          </li>
          <li className="p-3 hover:bg-stone-100 transition-colors">
            <Link href="/" className="text-stone-700 transition-colors">
              About
            </Link>
          </li>
          <li className="p-3 hover:bg-stone-100 transition-colors">
            <Link href="/contact" className="text-stone-700 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

