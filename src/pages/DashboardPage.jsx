import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardOverview from '../components/dashboard/DashboardOverview'
import ProductsList from '../components/dashboard/ProductsList'
import ProductForm from '../components/dashboard/ProductForm'
import OrdersList from '../components/dashboard/OrdersList'
import CustomersList from '../components/dashboard/CustomersList'
import Analytics from '../components/dashboard/Analytics'

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleSaveProduct = (productData) => {
    // In a real app, this would make an API call
    console.log('Saving product:', productData);
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleCancelProductForm = () => {
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const renderPage = () => {
    if (currentPage === 'products') {
      if (showProductForm) {
        return (
          <ProductForm
            product={editingProduct || undefined}
            onSave={handleSaveProduct}
            onCancel={handleCancelProductForm}
          />
        );
      }
      return (
        <ProductsList
          onAddProduct={handleAddProduct}
          onEditProduct={handleEditProduct}
        />
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'orders':
        return <OrdersList />;
      case 'customers':
        return <CustomersList />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-2">Manage your store settings and preferences</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Store Configuration</h2>
              <p className="text-gray-600">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
