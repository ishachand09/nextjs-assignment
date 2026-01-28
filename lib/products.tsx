export interface Product {
    id: number;
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

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch('https://fakestoreapi.com/products');

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }

        const data = await res.text();
        if (!data) return [];

        return JSON.parse(data);
    } catch (error) {
        console.error('Error in getProducts:', error);
        throw error;
    }
}

export async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
        }

        const data = await res.text();
        if (!data) return null;

        return JSON.parse(data);
    } catch (error) {
        console.error(`Error in getProduct(${id}):`, error);
        return null;
    }
}
