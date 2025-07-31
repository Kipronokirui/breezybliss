import React from 'react'
import { Home, Search, ArrowLeft, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-cream-200 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-300/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-300/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-purple-300/30 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-blue-700 opacity-20 select-none animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 animate-fade-in-up">
                <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
                  OOPS!
                </h2>
                <p className="text-xl md:text-2xl text-blue-600 font-medium">
                  Page Not Found
                </p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-6 animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
              Looks like you've wandered off the beaten path!
            </h3>
            <p className="text-lg md:text-xl text-blue-600 max-w-2xl mx-auto leading-relaxed">
              Don't worry, even the most creative souls get lost sometimes. 
              Let's get you back to discovering amazing products at Breezy Bliss!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link
              to={`/`}
              className="group bg-blue-600 text-yellow-300 font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3"
            >
              <Home className="w-5 h-5" />
              <span>GO HOME</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to={`/shop`}
              className="group bg-white/20 backdrop-blur-sm text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-white/30 transition-all transform hover:scale-105 border-2 border-white/30 flex items-center space-x-3"
            >
              <Search className="w-5 h-5" />
              <span>BROWSE PRODUCTS</span>
            </Link>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 animate-fade-in-up animation-delay-800">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-blue-600 font-medium">Happy Customers</div>
              <div className="text-blue-500 text-sm">Still finding us!</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-700 mb-2">100+</div>
              <div className="text-blue-600 font-medium">Unique Products</div>
              <div className="text-blue-500 text-sm">Waiting for you!</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-center text-3xl font-bold text-blue-700 mb-2">
                4.9
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 ml-1" />
              </div>
              <div className="text-blue-600 font-medium">Rating</div>
              <div className="text-blue-500 text-sm">Worth the journey!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 bg-yellow-400 p-4 rounded-full shadow-lg animate-bounce-slow">
        <Sparkles className="w-6 h-6 text-blue-700" />
      </div>
      <div className="absolute bottom-1/4 right-8 bg-orange-400 p-3 rounded-full shadow-lg animate-pulse-slow">
        <Star className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}
