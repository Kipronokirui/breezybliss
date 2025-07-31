import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, Plus, Minus } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetailsPage() {
  // const product = products[0];
  const { id } = useParams(); // get id from route
  const productId = parseInt(id, 10); // convert to number if your IDs are numbers

  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("default");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  if (!product) {
    return <div className="p-4 text-red-600">Product not found</div>;
  }
  // Mock additional images for the gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const colors = [
    { name: "default", color: "#000000" },
    { name: "white", color: "#FFFFFF" },
    { name: "blue", color: "#3B82F6" },
    { name: "yellow", color: "#FCD34D" },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-cream-200">
      {/* Header */}
      <div className="bg-yellow-400 p-4">
        <Link
          to={`/shop`}
          className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Products</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-yellow-300">
              <div className="aspect-square bg-cream-100 rounded-xl overflow-hidden">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2">
              {productImages.slice(0, 12).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg p-2 border-2 transition-all hover:border-yellow-400 ${
                    selectedImage === index
                      ? "border-yellow-400 ring-2 ring-yellow-300"
                      : "border-cream-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            {/* Product Title and Price */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-yellow-300 uppercase tracking-wide mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-yellow-200 text-sm">(4.8)</span>
                  </div>
                  <p className="text-yellow-200">Tax included</p>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-yellow-300 hover:bg-white/30"
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={isWishlisted ? "currentColor" : "none"}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-yellow-300 hover:bg-white/30 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div> */}
              </div>

              <div className="text-4xl font-bold text-yellow-300">
                AED {product.price.toLocaleString()}
              </div>
            </div>

            {/* Product Options */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-300 space-y-6">
              {/* Quantity */}
              <div>
                <label className="block text-blue-700 font-bold mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-cream-100 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 text-blue-600 hover:bg-cream-200 rounded-l-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-bold text-blue-700 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 text-blue-600 hover:bg-cream-200 rounded-r-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-blue-700 font-bold mb-3">
                  Size
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? "border-yellow-400 bg-yellow-400 text-blue-700"
                          : "border-cream-200 text-blue-600 hover:border-yellow-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-blue-700 font-bold mb-3">
                  Color
                </label>
                <div className="flex items-center space-x-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? "border-yellow-400 ring-2 ring-yellow-300"
                          : "border-gray-300 hover:border-yellow-300"
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-yellow-300 font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                ADD TO CART
              </button>
              <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all transform hover:scale-105 shadow-lg text-lg">
                BUY IT NOW
              </button>
            </div>

            {/* Product Description */}
            <div className="bg-cream-100 rounded-2xl p-6 border-4 border-yellow-300">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Product Description
              </h3>
              <p className="text-blue-600 leading-relaxed">
                {product.description ||
                  `Experience the perfect blend of style and comfort with our ${product.name}. Crafted with premium materials and attention to detail, this piece embodies the creative spirit of Breezy Bliss. Whether you're making a statement or keeping it casual, this versatile piece will elevate your wardrobe.`}
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600">Material:</span>
                  <span className="text-blue-700 font-medium">
                    100% Premium Cotton
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600">Care:</span>
                  <span className="text-blue-700 font-medium">
                    Machine wash cold
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600">Origin:</span>
                  <span className="text-blue-700 font-medium">
                    Designed in Kenya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
