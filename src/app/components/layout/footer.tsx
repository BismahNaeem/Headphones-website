"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-20 px-4 flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">
            SHOP<span className="text-pink-400">CART</span>
          </h2>
          <p className="mt-2 text-sm">
            YOUR TRUST OUR PRIORITY
          </p>
          <p className="mt-2 text-sm">
            &copy; 2024 SHOPCART. All Rights Reserved.
          </p>
        </div>

        {/* Center Section - SUBSCRIPTION */}
        <div className="mt-6 mr-28 md:mt-6  ">
          <h3 className="text-lg font-semibold ml-10">SUBSCRIBE TO GET IN TOUCH</h3>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full md:w-auto py-2 px-4 rounded-l-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-pink-400 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Section - Social Media */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            {/* Font Awesome Icons */}
            <a
               href="https://www.linkedin.com/in/bismah-naeem-901b49290" >
              <FontAwesomeIcon icon={faLinkedin}  className="text-white hover:text-pink-400 text-2xl mt-1"/>
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 text-2xl"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href=''
              className="text-white hover:text-pink-400 text-2xl"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 text-2xl"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            
          </div>
         
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center ">
        <div className="space-x-4">
          <a href="#" className="hover:text-pink-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pink-400">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;