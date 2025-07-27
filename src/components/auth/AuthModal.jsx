import React, { useState } from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-[#FEF3C7] to-yellow-100 rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-yellow-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-blue-700">BREEZY BLISS</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-yellow-200 transition-colors"
            >
              <X className="w-6 h-6 text-blue-700" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {mode === 'login' ? (
              <LoginForm 
                onSwitchToSignup={() => setMode('signup')}
                onClose={onClose}
              />
            ) : (
              <SignupForm 
                onSwitchToLogin={() => setMode('login')}
                onClose={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
