import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 shadow-lg transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white/20"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold text-gray-800">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-poppins">
          <li>
            <Link
              to="/"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/services") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/portfolio") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/product") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/explore") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/careers") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/about") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/insights"
              className={`px-2 py-1 hover:text-blue-600 transition text-sm lg:text-base ${
                isActive("/insights") ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Insights
            </Link>
          </li>
        </ul>

        {/* CTA Button (Desktop) */}
        <Link
          to="/quote"
          className="ml-4 px-4 py-2 border-2 border-blue-600 text-blue-500 rounded-3xl bg-transparent hover:bg-blue-700 hover:text-white transition-colors duration-300 hidden md:block text-sm lg:text-base"
        >
          Let's Talk →
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden text-gray-800 text-2xl cursor-pointer p-1"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg mt-2">
          <ul className="space-y-3 text-gray-800 font-poppins">
            <li>
              <Link
                to="/"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/services") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/explore") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/portfolio") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/product") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/careers") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/about") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/insights"
                className={`block px-2 py-1 hover:text-blue-600 transition ${
                  isActive("/insights") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                to="/quote"
                className="block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full"
                onClick={closeMenu}
              >
                Let's Talk →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
