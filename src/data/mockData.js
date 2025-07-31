export const mockProducts = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    stock: 45,
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring',
    price: 299.99,
    category: 'Electronics',
    stock: 23,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'active',
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt',
    price: 29.99,
    category: 'Clothing',
    stock: 0,
    image: 'https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'inactive',
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    name: 'Professional Coffee Maker',
    description: 'Barista-quality coffee maker for home use',
    price: 149.99,
    category: 'Home & Kitchen',
    stock: 12,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'active',
    createdAt: '2024-01-05'
  }
];

export const mockOrders = [
  {
    id: 'ORD-001',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    products: [
      { productId: '1', productName: 'Wireless Bluetooth Headphones', quantity: 1, price: 199.99 }
    ],
    total: 199.99,
    status: 'delivered',
    createdAt: '2024-01-20',
    shippingAddress: '123 Main St, New York, NY 10001'
  },
  {
    id: 'ORD-002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah@example.com',
    products: [
      { productId: '2', productName: 'Smart Fitness Watch', quantity: 1, price: 299.99 },
      { productId: '3', productName: 'Organic Cotton T-Shirt', quantity: 2, price: 29.99 }
    ],
    total: 359.97,
    status: 'processing',
    createdAt: '2024-01-19',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210'
  },
  {
    id: 'ORD-003',
    customerName: 'Michael Brown',
    customerEmail: 'michael@example.com',
    products: [
      { productId: '4', productName: 'Professional Coffee Maker', quantity: 1, price: 149.99 }
    ],
    total: 149.99,
    status: 'shipped',
    createdAt: '2024-01-18',
    shippingAddress: '789 Pine St, Chicago, IL 60601'
  }
];

export const mockCustomers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    totalOrders: 5,
    totalSpent: 849.95,
    lastOrder: '2024-01-20',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    totalOrders: 3,
    totalSpent: 659.97,
    lastOrder: '2024-01-19',
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    totalOrders: 2,
    totalSpent: 299.98,
    lastOrder: '2024-01-18',
    status: 'active'
  }
];

export const mockStats = {
  totalRevenue: 52847.32,
  totalOrders: 1247,
  totalProducts: 156,
  totalCustomers: 892,
  revenueGrowth: 12.5,
  ordersGrowth: 8.3
};