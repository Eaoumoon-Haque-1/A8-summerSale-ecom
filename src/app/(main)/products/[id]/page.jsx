import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import { FiPackage, FiTag } from "react-icons/fi";

const getProducts = async () => {
  const res = await fetch("https://a8-summer-sale-ecom.vercel.app/products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const products = await getProducts();

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-[#fff7ed] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/products"
          className="mb-8 inline-block text-sm font-bold text-orange-600 hover:text-orange-700"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-orange-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow">
              {product.category}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
              {product.brand}
            </p>

            <h1 className="mt-3 text-4xl font-black text-slate-950">
              {product.name}
            </h1>

            <p className="mt-5 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Price</p>
                <p className="mt-1 text-2xl font-black text-orange-600">
                  ${product.price}
                </p>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Rating</p>
                <p className="mt-2 flex items-center gap-2 text-xl font-black text-yellow-600">
                  <FaStar />
                  {product.rating}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Stock</p>
                <p className="mt-2 flex items-center gap-2 text-xl font-black text-slate-800">
                  <FiPackage />
                  {product.stock}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <FiTag className="text-orange-500" />
              Category: {product.category}
            </div>

            <button className="mt-8 w-fit rounded-full bg-orange-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;