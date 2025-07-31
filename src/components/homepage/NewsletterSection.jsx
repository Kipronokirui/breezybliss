import React, { useState } from 'react';
import { Mail, Send, Gift } from 'lucide-react';

export default function NewsletterSection(){
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 text-blue-700 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              JOIN THE BREEZY FAMILY
            </h2>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">
              Subscribe to our newsletter and get 15% off your first order, plus exclusive access 
              to new collections and special offers!
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-blue-400 focus:bg-white/70 transition-all text-blue-700 placeholder-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group bg-blue-600 text-yellow-300 font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>SUBSCRIBE</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <p className="text-blue-600 text-sm">
                  By subscribing, you agree to receive marketing emails. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700">Welcome to the Family!</h3>
                <p className="text-blue-600">
                  Check your email for your 15% discount code and exclusive updates.
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">15%</span>
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">First Order Discount</h3>
              <p className="text-blue-600">Get 15% off your first purchase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">Exclusive Access</h3>
              <p className="text-blue-600">First to know about new collections</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">Special Offers</h3>
              <p className="text-blue-600">Member-only deals and promotions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

