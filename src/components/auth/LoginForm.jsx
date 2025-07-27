import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginForm({ onSwitchToSignup, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      // Here you would typically handle successful login
      console.log('Login successful:', formData);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Welcome Back!</h2>
        <p className="text-blue-600">Sign in to your Breezy Bliss account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-blue-700">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                errors.email 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-[#FEF3C7] bg-white hover:border-yellow-300'
              }`}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-blue-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                errors.password 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-[#FEF3C7] bg-white hover:border-yellow-300'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm flex items-center">
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-yellow-400 border-2 border-[#FEF3C7] rounded focus:ring-yellow-400"
            />
            <span className="ml-2 text-sm text-blue-600">Remember me</span>
          </label>
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-700 font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-orange-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Signup */}
      <div className="mt-8 text-center">
        <p className="text-blue-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="font-bold text-blue-700 hover:text-blue-800 transition-colors"
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
}
