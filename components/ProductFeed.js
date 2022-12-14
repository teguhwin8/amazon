import Product from "./Product";

function ProductFeed({ products }) {
  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-gray-50 p-3">
      {products && products.map((product) => (
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
  );
}

export default ProductFeed;
