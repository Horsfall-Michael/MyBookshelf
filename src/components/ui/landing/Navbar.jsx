import {useState} from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <nav className="bg-white p-4 text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="My Bookshelf logo" className="h-10" />
          <p className="font-display bg-linear-to-r from-[#6366F1] to-[#393B8B] bg-clip-text text-transparent font-bold">
            My Bookshelf
          </p>
        </div>

        <div className="hidden md:flex space-x-8 font-display text-gray-600 dark:text-[#9ca3af]">
          <Link href="#" className=" hover:text-[#6366F1]">Home</Link>
          <Link href="#" className=" hover:text-[#6366F1]">About</Link>
          <Link href="#" className=" hover:text-[#6366F1]">Services</Link>
          <Link href="#" className=" hover:text-[#6366F1]">Contact</Link>
        </div>

        <button
          id="menu-btn"
          type="button"
          className="block md:hidden text-[#6366F1] focus:outline-hidden"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center relative">
            <span id="line1" className="w-full h-0.5 bg-current rounded-sm transition-transform duration-300 origin-left"></span>
            <span id="line2" className="w-full h-0.5 bg-current rounded-sm transition-opacity duration-300"></span>
            <span id="line3" className="w-full h-0.5 bg-current rounded-sm transition-transform duration-300 origin-left"></span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-4">
        <Link className="font-semibold text-[#111827]" href="/login">Log In</Link>
        <Link className="py-2 px-4 bg-[#6366F1] rounded-xl text-white font-semibold hover:bg-[#4F46E5] ease-in transition-[300ms]">Start your Library</Link>
      </div>
      </div>

      <div
        id="mobile-menu"
        className="hidden md:hidden flex-col space-y-4 pt-4 pb-2 border-t border-gray-100 dark:border-[#2e303a] mt-4 font-display text-gray-600 dark:text-[#9ca3af]"
      >
        <Link href="#" className="hover:text-gray-900 dark:hover:text-[#f3f4f6]">Home</Link>
        <Link href="#" className="hover:text-gray-900 dark:hover:text-[#f3f4f6]">About</Link>
        <Link href="#" className="hover:text-gray-900 dark:hover:text-[#f3f4f6]">Services</Link>
        <Link href="#" className="hover:text-gray-900 dark:hover:text-[#f3f4f6]">Contact</Link>
      </div>

       {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-bg flex flex-col mt-1 items-center p-4 gap-8 text-[20px] text-muted rounded-lg"
        >
          <Link
            href="#home"
            className="text-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="#about"
            className="text-text"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="#services"
            className="text-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="#work"
            className="text-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;