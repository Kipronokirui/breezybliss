import React from "react";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/breezeBlissLogo.jpeg";

export default function Navbar() {
  const { cartItems, toggleCart } = useCart();
  const { openAuthModal } = useAuth();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full fixed bg-yellow-400 shadow-lg top-0 z-40">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="md:hidden p-2 cursor-pointer rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
              <Menu className="w-5 h-5 text-blue-700" />
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Breezy Bliss Logo"
                className="w-8 h-8 object-contain rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide">
                BREEZY BLISS
              </h3>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="p-2 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Search className="w-5 h-5 text-blue-700" />
            </div>
            <div
              onClick={() => openAuthModal("login")}
              className="p-2 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <User className="w-5 h-5 text-blue-700" />
            </div>
            <div
              onClick={toggleCart}
              className="relative p-2 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-blue-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
