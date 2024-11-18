"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                  {/* logo */}
<div>
<h2 className="  text-2xl  md:text-left ml-40 mt-2   text-pink-600   font-bold">SHOPCART</h2>
</div>

          {/* nav buttons */}

    <ul className="hidden md:flex  row  space-x-6 ml-18 ">
    <li>
            <Link href="/"> HOME</Link>
        </li>
    <li>
            <Link href="/categories"> CATEGORIES</Link>
        </li>
        <li>
            <Link href="/about">ABOUT</Link>
          </li>
       
      
        <li>
            <Link href="/">DEALS</Link>
          </li>
        
    </ul>
       

        {/* Search Bar and Icons */}
        <div className="hidden  md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className=" flex items-center border border-pink-300 rounded-md px-2 py-1 bg-white">
            <FontAwesomeIcon icon={faSearch} className="text-pink-500 text-sm mr-2 h-4" />
            <input
              type="text"
              placeholder="Search Product"
              className="outline-none text-pink-500 bg-transparent w-full"
            />
          </div>

          {/* Account Icon */}
          
          <a  className="hover:text-gray-300">
          <p> <FontAwesomeIcon icon={faUser} className=" h-5 w-4 text-pink-600" /></p>
          </a>
          
          {/* Cart Icon */}
         
          <a  className="hover:text-gray-300">
           <p> <FontAwesomeIcon icon={faShoppingCart} className=" h-5 mr-12 text-pink-600" /></p>
          </a>
          
        </div>
      </div>

      {/* Mobile Menu */}
       <div className="md:hidden mt-2">
        <ul className="flex flex-row items-center space-x-6 ml-28">
        <li>
            <Link href="/"> HOME</Link>
        </li>
    <li>
            <Link href="/categories"> CATEGORIES</Link>
        </li>
        <li>
            <Link href="/about">ABOUT</Link>
          </li>
       
      
        <li>
            <Link href="/">DEALS</Link>
          </li>
        
        </ul>
      </div> 
    </header>
  );
}