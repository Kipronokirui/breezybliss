import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import AuthModal from "./components/auth/AuthModal";
import Cart from "./components/cart/Cart";
import Navbar from "./components/common/Navbar";
import ProductGrid from "./components/ProductGrid";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/common/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-16 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
{
  /* <main className="mt-16 mx-auto px-4 py-8">
        <ProductGrid />
      </main> */
}
const AppContent = () => {
  const { isAuthModalOpen, authModalMode, closeAuthModal } = useAuth();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />.
        <Route
          path="/shop"
          element={
            <MainLayout>
              <ShopPage />
            </MainLayout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetailsPage />
            </MainLayout>
          }
        />
        <Route
          path="/account/login"
          element={
            <MainLayout>
              <LoginPage />
            </MainLayout>
          }
        />
        <Route
          path="/account/register"
          element={
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          }
        />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Cart />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialMode={authModalMode}
      />
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
