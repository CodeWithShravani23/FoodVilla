const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-20 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
        {/* About Us */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-3">About Us</h4>
          <p className="text-sm leading-relaxed">
            FoodVilla is your go-to food delivery platform, offering a variety of delicious cuisines right at your doorstep. Fast, fresh, and flavorful!
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-purple-600 transition-colors">Home</a></li>
            <li><a href="/offer" className="hover:text-purple-600 transition-colors">Offers</a></li>
            <li><a href="/cart" className="hover:text-purple-600 transition-colors">Cart</a></li>
            <li><a href="/instamart" className="hover:text-purple-600 transition-colors">Instamart</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400 transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-700 transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 pt-6 text-center text-sm">
        <p>© 2025 FoodVilla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

