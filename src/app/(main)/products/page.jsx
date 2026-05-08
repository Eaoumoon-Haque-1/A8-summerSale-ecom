import PhotoCard from "@/components/shared/PhotoCard";


const Products = async () => {
  const res = await fetch("https://a8-summer-sale-ecom.vercel.app/products.json");
  const products = await res.json();


  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Available Products
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {products.map((product) => (
    <PhotoCard key={product.id} product={product} />
  ))}
</div>
      </div>
    </section>
  );
};

export default Products;