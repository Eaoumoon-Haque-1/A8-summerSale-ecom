import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md shadow-orange-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-orange-50">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.name}
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orange-600 shadow-sm backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-semibold text-slate-400">
            {product.brand}
          </p>

          <h2 className="mt-1 line-clamp-1 text-lg font-black text-slate-950">
            {product.name}
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-black text-orange-600">
            ${product.price}
          </p>

          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">
            <FaStar />
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <FiPackage />
          <span>{product.stock} items in stock</span>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="block w-full rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
}