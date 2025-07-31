import React from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Handpicked items that showcase our creative spirit and quality
            craftsmanship
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-[#FEF3C7] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-4 border-yellow-300 hover:border-yellow-400"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative bg-white rounded-xl p-4 mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 rounded-xl">
                  <button className="p-3 bg-white rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-110">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors transform hover:scale-110"
                  >
                    <ShoppingCart className="w-5 h-5 text-blue-700" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-blue-600 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 text-center">
                <h3 className="text-lg font-bold text-blue-700 uppercase tracking-wide group-hover:text-blue-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-blue-600 text-sm">{product.description}</p>
                <div className="text-xl font-bold text-blue-700">
                  AED {product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-700 font-bold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
