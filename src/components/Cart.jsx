import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../cartSlice';
import FoodItem from './foodItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          <h2 className="text-xl mb-2">Your cart is empty 😔</h2>
          <p>Add some tasty items to enjoy your meal!</p>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <button
              onClick={handleClearCart}
              className="bg-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-200 transition"
            >
              🧹 Clear Cart
            </button>
          </div>

          <div className="flex flex-wrap gap-10 justify-center mt-8">
            {cartItems.map((item) => (
              <FoodItem key={item.idCategory} {...item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
