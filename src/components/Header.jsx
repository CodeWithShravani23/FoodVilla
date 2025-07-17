import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Logo} from "./constant.js"

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-orange-100 to-yellow-100 px-10 py-5 shadow-md sticky top-0 z-50">
      {/* Logo and Brand */}
      <div className="flex items-center gap-4">
         <img
    src={Logo}
    alt="logo"
    className="w-12 h-12" data-testid="logo"
  />
       <h2 className="text-4xl font-bold text-orange-600 tracking-tight" style={{ fontFamily: 'Lobster, cursive' }}>
  Food<span className="text-red-500">Villa</span>
</h2>

      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-orange-600 transition duration-200">Home</Link>

        <Link to="/offer" className="hover:text-orange-600 transition duration-200">
          Offer <FontAwesomeIcon icon={faCertificate} />
        </Link>

        <Link to="/cart" className="relative hover:text-orange-600 transition duration-200" data-testid="cart">
          <FontAwesomeIcon icon={faCartPlus} />
          {cartItem.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartItem.length}
            </span>
          )}
        </Link>

        <Link to="/instamart" className="hover:text-orange-600 transition duration-200">Instamart</Link>

        <Link to="/login">
          <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

