import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* Banner section */}

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

        {/* Card section */}
        <div className="my-container my-24 flex justify-center gap-8">

          <div className="relative">

            <Image
              src="/images/table-linen.png"
              alt="table-linen"
              width={400}
              height={400}
              className="w-100 h-100"
              priority
            />

            <div className="absolute bottom-0 left-0 w-full h-fit py-6 bg-gray-900/30 text-white flex flex-col justify-center items-center">
              <h3 className="text-2xl font-medium">Table Linens</h3>
              <p className="text-center italic mt-2">Italian Linen Tablecloths</p>
            </div>

          </div>

          <div className="relative">
            <Image
              src="/images/duvet-cover.jpg"
              alt="duvet-cover"
              width={400}
              height={400}
              className="w-100 h-100"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-fit py-6 bg-gray-900/30 text-white flex flex-col justify-center items-center">
              <h3 className="text-2xl font-medium">Duvet Covers</h3>
              <p className="text-center italic mt-2">Cozy Winter Essentials in Linen</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/table-cloth.jpg"
              alt="table-cloth"
              width={400}
              height={400}
              className="w-100 h-100"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-fit py-6 bg-gray-900/30 text-white flex flex-col justify-center items-center">
              <h3 className="text-2xl font-medium">Easy Care Tablecloths</h3>
              <p className="text-center italic mt-2">Non-Iron Options</p>
            </div>
          </div>

        </div>

        {/* Blog section */}

        <div className="my-container bg-stone-200 py-12 flex gap-24 justify-between">

          <div className="text-stone-700 py-12">
            <h3 className="text-3xl font-semibold">Hemstitch Tablecloths Napkins</h3>
            <p className="italic mt-2 font-medium">Unique Luxury Linens for an Elegant Table Setting</p>
            <p className="mt-4 text-stone-600">
              Huddleson has become well know for our hemstitch tablecloths, napkins and  table linens because our customers love the quality, the uniqueness and the breadth of choice.  Our hemstitch table linens are embellished with an elegant trim in either a matching or contrasting color.
            </p>
            <p className="mt-2 text-stone-600">There is an option for every season, holiday, taste and style. From the timeless white, ivory and natural neutrals to the bold saturated Burgundy Red and Sienna Orange; from the classic monochromatic black and white (and white and black!) to the unique and unexpected Petrol Teal and Natural or Silver and White. Most of the images below are of placemats, napkins and table runners which are available to buy in the online table linen store.</p>
          </div>

          <div className="w-full flex justify-end">
            <Image
              src="/images/table-linen.png"
              alt="table-linen"
              width={200}
              height={200}
              className="w-90 h-90"
              priority
            />
          </div>
        </div>

        {/* About Us section */}
        <section className="my-container py-24 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800">About Us</h2>
          </div>

          <div className="flex gap-16 items-center">

            <div className="flex-1">
              <div className="relative h-100 w-full">
                <Image
                  src="/images/about.jpg"
                  alt="About Us"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                Crafting Quality Linens Since 1988
              </h3>
              <p className="text-stone-600 mb-4 leading-relaxed">
                We are passionate about creating beautiful, high-quality table linens that transform ordinary meals into extraordinary experiences. Our commitment to excellence has made us a trusted name in luxury home textiles for over three decades.
              </p>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Every piece in our collection is carefully crafted using premium materials and traditional techniques, ensuring that your table settings are always elegant and memorable. From intimate family dinners to grand celebrations, our linens add a touch of sophistication to every occasion.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed">
                We believe that the details matter. That's why we offer an extensive range of colors, patterns, and styles to suit every taste and complement any décor. Our dedication to quality, combined with our passion for design, ensures that you'll find the perfect linens to express your personal style.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-stone-700 text-white hover:bg-stone-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>


          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
