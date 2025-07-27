import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'bags', 'shirts', 'earrings', 'bracelets'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-4 space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(category => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium capitalize transition-all transform hover:scale-105 cursor-pointer ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/50 text-blue-700 hover:bg-white/70'
            }`}
          >
            {category === 'all' ? 'All Products' : category}
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-blue-700 text-lg font-medium">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
