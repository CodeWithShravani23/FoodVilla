import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-gradient-to-r from-yellow-100 to-amber-200 p-6">
      <FontAwesomeIcon icon={faGift} className="text-5xl text-purple-700 mb-4" />
      
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        🎉 Flat 15% Discount on All Orders!
      </h1>
      
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        Celebrate your cravings! Enjoy delicious food at a discounted price. Hurry, offer valid for a limited time only!
      </p>
      
      <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-800 transition">
        Order Now
      </button>
    </div>
  );
};

export default Offer;

