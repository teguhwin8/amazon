import Image from "next/image";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-50 p-3 md:-mt-52">
        {products &&
          products
            .slice(0, 4)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating.rate ?? 0}
              />
            ))}
      </div>
      <div className="w-full relative aspect-[5/1]">
        <Image src="/images/home-banner-1.jpg" fill alt="Amazon Home Banner" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-gray-50 p-3">
        {products &&
          products
            .slice(4, products.length)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating.rate ?? 0}
              />
            ))}
      </div>
    </div>
  );
}

export default ProductFeed;
