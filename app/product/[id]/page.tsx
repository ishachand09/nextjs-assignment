import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProduct, getProducts } from '@/lib/products';

// This function is required for SSG (Static Site Generation) in the App Router.
// It tells Next.js which paths should be pre-rendered at build time.
export async function generateStaticParams() {
    const products = await getProducts();

    // We return an array of objects where each object contains the 'id' parameter.
    // Next.js will use these to generate static pages for each product.
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);

    // If the product doesn't exist, we show the 404 page.
    if (!product) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="py-12 md:pb-24">
                <div className="my-container">
                    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-8 md:gap-12">
                        {/* Image Section */}
                        <div className="w-full p-4 flex items-center justify-center border border-stone-200">
                            <div className="relative w-full aspect-square max-w-md group">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full flex flex-col">
                            <div className="mb-6">
                                <h1 className="text-3xl font-medium text-stone-700 leading-tight mb-4">
                                    {product.title}
                                </h1>
                                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-500 text-xs font-medium uppercase tracking-wider mb-4">
                                    {product.category}
                                </span>


                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < Math.floor(product.rating.rate)
                                                    ? 'text-yellow-400'
                                                    : 'text-stone-200'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-stone-500">
                                        {product.rating.rate} ({product.rating.count} reviews)
                                    </span>
                                </div>

                                <div className="text-2xl font-light text-stone-700 mb-8 ">
                                    ${product.price.toFixed(2)}
                                </div>

                                <div className="space-y-3 mb-10">
                                    <h3 className="text-lg font-medium text-stone-700">Product Details</h3>
                                    <p className="text-stone-500">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="w-50 py-3 px-4 bg-stone-700 text-white hover:bg-stone-600 transition-colors">
                                    Add to Cart
                                </button>
                                <button className="w-50 py-3 px-4 border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors">
                                    Wishlist
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
