import React, { createContext, useContext, useState, ReactNode } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



export const AuthProvider = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const openAuthModal = (mode) => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthModalOpen,
      authModalMode,
      openAuthModal,
      closeAuthModal,
      isAuthenticated,
      user
    }}>
      {children}
    </AuthContext.Provider>
  );
};