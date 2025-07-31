import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">BREEZY BLISS</h3>
              <p className="text-blue-200 leading-relaxed">
                Expressing creativity through fashion. Discover unique pieces that bring 
                joy and style to your everyday life.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-700 transition-all transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-700 transition-all transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-700 transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['Shop All', 'New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards', 'Size Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-6">CATEGORIES</h4>
            <ul className="space-y-3">
              {['Bags', 'Shirts', 'Earrings', 'Bracelets', 'Accessories', 'Collections'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors hover:translate-x-1 transform inline-block">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-6">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">Nairobi, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">hello@breezybliss.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Customer Support</h5>
              <p className="text-blue-200 text-sm">
                Mon - Fri: 9AM - 6PM<br />
                Sat - Sun: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-200">
              <span>© {currentYear} Breezy Bliss. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in UAE</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors">Shipping Info</a>
              <a href="#" className="text-blue-200 hover:text-yellow-300 transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

