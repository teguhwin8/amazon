import Image from "next/image";
import Price from "./Price";
import Rating from "./Rating";

function Product({ id, title, price, description, category, image, rating }) {
  return (
    <div className="relative flex flex-col bg-white p-4 z-30 text-sm">
      <p className="absolute top-2 right-2 text-gray-400 text-xs">{category}</p>
      <div className="aspect-square relative mt-5">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <h4 className="my-4 text-lg font-bold leading-5 line-clamp-2 h-10">
        {title}
      </h4>

      <div>
        <Rating value={rating} />
      </div>
      <p className="my-4 text-xs text-gray-500 line-clamp-3 h-12">{description}</p>
      <Price value={price} />
    </div>
  );
}

export default Product;
