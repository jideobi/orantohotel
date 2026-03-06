import { useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/product.json";
import { FaStar } from "react-icons/fa";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-16">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Oranto Hotel Shop
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}

      </div>
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:scale-105 transition duration-300">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover rounded-2xl mb-4"
      />

      {/* Badge */}
      <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">
       Oranto Hotel Collection
      </span>

      {/* Name */}
      <h2 className="text-xl font-semibold mt-3">
        {product.name}
      </h2>

      {/* Rating */}
      <div className="flex text-yellow-400 mt-2 mb-2">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-yellow-500 text-xl font-bold mb-4">
        ₦{product.price.toLocaleString()}
      </p>

      {/* Quantity */}
      <div className="flex items-center gap-3 mb-4">

        <button
          onClick={() => qty > 1 && setQty(qty - 1)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          -
        </button>

        <span>{qty}</span>

        <button
          onClick={() => setQty(qty + 1)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          +
        </button>

      </div>

      {/* Add To Cart */}
      <button
        onClick={() => addToCart({ ...product, qty })}
        className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}