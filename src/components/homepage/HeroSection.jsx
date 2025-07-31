import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function HeroSection(){
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-[#FEF3C7] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-300/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-300/50 rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
                <span className="text-blue-700 font-medium uppercase tracking-wide">Creative Fashion</span>
                <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-blue-700 leading-tight">
                <span className="block animate-fade-in-up">BREEZY</span>
                <span className="block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  BLISS
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-600 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
                Discover unique fashion pieces that express your creative spirit and bring joy to your everyday style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <button className="group bg-blue-600 text-yellow-300 font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>SHOP NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-white/30 transition-all transform hover:scale-105 border-2 border-white/30">
                EXPLORE COLLECTIONS
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animation-delay-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">500+</div>
                <div className="text-blue-600 text-sm uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">100+</div>
                <div className="text-blue-600 text-sm uppercase tracking-wide">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">4.9</div>
                <div className="text-blue-600 text-sm uppercase tracking-wide flex items-center justify-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product */}
          <div className="relative animate-fade-in-right animation-delay-300">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-300 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                NEW!
              </div>
              
              <div className="bg-[#FEF3C7] rounded-2xl p-6 mb-6">
                <img
                  src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
                  alt="Featured Product"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-blue-700 uppercase">Featured Collection</h3>
                <p className="text-blue-600">Discover our latest creative designs</p>
                <div className="text-2xl font-bold text-blue-700">Starting at AED 1,800</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 bg-yellow-400 p-4 rounded-full shadow-lg animate-bounce-slow">
              <Sparkles className="w-6 h-6 text-blue-700" />
            </div>
            <div className="absolute -bottom-4 -right-8 bg-orange-400 p-3 rounded-full shadow-lg animate-pulse-slow">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

