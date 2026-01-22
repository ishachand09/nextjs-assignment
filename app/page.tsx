import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="relative w-full h-[600px]">
          <Image
            src="/images/banner.jpg"
            alt="Product Banner"
            fill
            className="object-cover"
            priority
          />


          <div className="absolute bottom-0 flex items-center w-full py-6 bg-gray-900/20">
            <div className="w-full flex flex-col justify-center gap-4">
              <h2 className="text-white text-2xl text-center px-4">
                Sky blue Linen Table Cloth
              </h2>

              <div className="flex justify-center">
                <Link className="text-white text-center px-6 py-2 border border-white hover:bg-white hover:text-stone-700 transition-colors" href="/product">Shop Now</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
