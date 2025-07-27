import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart,
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={toggleCart}
      />
      
      {/* Cart Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-blue-600 shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500">
          <h2 className="text-2xl font-bold text-yellow-300 tracking-wide">
            YOUR CART
          </h2>
          <div 
            onClick={toggleCart}
            className="p-2 cursor-pointer rounded-full hover:bg-blue-500 transition-colors"
          >
            <X className="w-6 h-6 text-yellow-300" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-96">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-yellow-200 text-lg">Your cart is empty</p>
              <button 
                onClick={toggleCart}
                className="mt-4 px-6 py-3 bg-yellow-400 text-blue-700 font-bold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg bg-[#FEF3C7]"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-blue-700 text-sm uppercase">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 text-sm">
                      KSH{item.price.toLocaleString()}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 cursor-pointer rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="w-8 text-center font-bold text-blue-700">
                          {item.quantity}
                        </span>
                        <div
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 cursor-pointer rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      
                      <div
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 cursor-pointer rounded-full hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-blue-500 space-y-4">
            <div className="flex justify-between items-center text-yellow-300">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-xl font-bold">
                AED {getCartTotal().toLocaleString()}
              </span>
            </div>
            
            <p className="text-yellow-200 text-sm text-center">
              Tax included and shipping calculated at checkout
            </p>
            
            <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-700 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 shadow-lg">
              CHECK OUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
