const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo and About */}
          <div>
            <img
              src="/logo.png"
              alt="Neighbourly Logo"
              className="w-24 mb-6"
            />
            <p className="text-sm leading-relaxed">
              Welcome to Neighbourly, your trusted platform for finding and
              connecting with trusted home services. We’re here to help you
              build a better community through reliable services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-around lg:justify-between">
            <div>
              <h3 className="font-semibold text-gray-100 mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-100 mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Stay updated with the latest news and special offers from
              Neighbourly.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-700 rounded-l-md focus:outline-none"
              />
              <button className="bg-green-500 px-6 py-2 text-white font-semibold rounded-r-md hover:bg-green-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Neighbourly. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
