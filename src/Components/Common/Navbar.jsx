/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeClass }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Programme", path: "/programme" },
    { name: "Club", path: "/club" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact-us" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -40 }}
      className="w-full h-[80px] flex-center relative"
    >
      <div className="w-[80%] h-full flex items-center justify-between">
        <h1 className="font-bold font-heading text-2xl">Schrodinger's Cat</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 font-body font-medium text-xl">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer ${
                activeClass === item.name
                  ? "text-[#008081] underline underline-offset-6"
                  : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name === "Contact" ? "Contact us" : item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-[80px] left-0 w-full bg-white shadow-lg border-t lg:hidden z-50"
        >
          <ul className="flex flex-col w-[80%] mx-auto py-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`py-3 px-2 font-body font-medium text-xl border-b last:border-b-0 cursor-pointer hover:text-[#008081] transition-colors duration-200 ${
                  activeClass === item.name
                    ? "text-[#008081] underline underline-offset-6"
                    : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name === "Contact" ? "Contact us" : item.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
