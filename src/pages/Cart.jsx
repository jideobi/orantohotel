import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, increase, decrease, removeItem, total } = useCart();

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-16">

      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 p-6 rounded-3xl flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-yellow-500">
                    ₦{item.price.toLocaleString()}
                  </p>

                  <p>Qty: {item.quantity}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => decrease(item.id)}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() => increase(item.id)}
                    className="bg-green-500 px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-gray-700 px-3 py-1 rounded"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL + PAY BUTTON */}
          <div className="mt-10 bg-gray-900 p-6 rounded-3xl text-right">
            <h2 className="text-2xl font-bold mb-4">
              Total: ₦{total.toLocaleString()}
            </h2>

            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              💳 Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}