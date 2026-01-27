import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store', // SSR - fetch fresh data on every request
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export default async function Bestseller() {
    const products = await getProducts();

    return (
        <>
            <Header />
            <section className="my-container pt-12 pb-24 mb-24">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-stone-700 mb-3">Bestsellers</h2>
                    <p className="text-stone-500 text-lg">
                        Our most loved products, handpicked just for you
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-14">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                </div>

            </section>
            <Footer />
        </>
    );
}
