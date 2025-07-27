import React from 'react'
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-[#FEF3C7] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-yellow-300">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="bg-white rounded-xl p-6 mb-4 aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Product Info */}
      <div className="space-y-3">
        <Link to={`/product/${product.id}`} className="text-lg font-bold text-blue-700 text-center uppercase tracking-wide">
          {product.name}
        </Link>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700">
            AED {product.price.toLocaleString()}
          </span>
          
          <div className="flex items-center space-x-2">
            {/* <div className="p-2 cursor-pointer rounded-full bg-white/50 hover:bg-white/70 transition-colors">
              <Heart className="w-4 h-4 text-blue-600" />
            </div> */}
            <div 
              onClick={handleAddToCart}
              className="p-2 cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white"
            >
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
        </div>

        {product.description && (
          <p className="text-sm text-blue-600 text-center">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
}
