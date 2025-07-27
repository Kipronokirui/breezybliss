import React from 'react'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/AuthContext'
import AuthModal from './components/auth/AuthModal'
import Cart from './components/cart/Cart'
import Navbar from './components/common/Navbar'
import ProductGrid from './components/ProductGrid'
import Header from './components/common/Header'

const AppContent = () => {
  const { isAuthModalOpen, authModalMode, closeAuthModal } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-[#FEF3C7]">
      <Navbar />
      <main className="mt-16 mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <Cart />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialMode={authModalMode}
      />
    </div>
  );
}
function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App
