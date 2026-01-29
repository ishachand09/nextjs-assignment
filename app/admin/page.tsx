import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';

export default function Admin() {
    return (
        <>
            <AdminHeader />
            <div className="my-container text-center py-14">
                <h3 className="text-xl font-bold">Manage your products here.</h3>
            </div>
            <div className="my-container flex justify-center gap-24">
                <div className="bg-blue-900 text-lg text-white font-medium px-10 py-3 hover:bg-blue-950 transition-colors">
                    <Link href="/admin/products">Products</Link>
                </div>
                <div className="bg-blue-900 text-lg text-white font-medium px-10 py-3 hover:bg-blue-950 transition-colors">
                    <Link href="/admin/add-product">Add Product</Link>
                </div>
            </div>
        </>
    );
}