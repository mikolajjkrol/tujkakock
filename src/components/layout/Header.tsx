import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Strona główna", path: "/" },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-700">Tujka Kock</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-base font-medium text-gray-700 transition-colors hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" className="bg-green-700 hover:bg-green-800">
            <Link to="/contact">Skontaktuj się</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            className="p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col p-4 space-y-3 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="py-2 text-base font-medium text-gray-700 transition-colors hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="bg-green-700 hover:bg-green-800">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Skontaktuj się
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;