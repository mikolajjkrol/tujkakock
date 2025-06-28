import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Tujka Kock</h3>
            <p className="max-w-xs text-gray-200">
              Jesteśmy pasjonatami tuj i oferujemy szeroki wybór roślin, które
              idealnie nadają się do każdego ogrodu. Nasze tuje są starannie
              wyselekcjonowane, aby zapewnić najwyższą jakość i zdrowie roślin.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/marek.krol.923" className="hover:text-green-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/marekkock" className="hover:text-green-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-300">
                  Produkty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300">
                  Skontaktuj się z nami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Skontaktuj się</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 text-green-300" size={20} />
              <p>ul. Piłsudskiego 21, Kock</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="flex-shrink-0 text-green-300" size={20} />
              <p>+48 888 468 811</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="flex-shrink-0 text-green-300" size={20} />
              <a href="mailto:marekkock@gmail.com" className="hover:text-green-300">
                marekkock@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-green-800">
          <p className="text-sm text-center text-gray-300">
            &copy; {currentYear} Tujka Kock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;