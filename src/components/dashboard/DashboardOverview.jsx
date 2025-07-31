import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import { mockStats } from '../../data/mockData';

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Total Revenue',
      value: `$${mockStats.totalRevenue.toLocaleString()}`,
      change: `+${mockStats.revenueGrowth}%`,
      changeType: 'positive',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Total Orders',
      value: mockStats.totalOrders.toLocaleString(),
      change: `+${mockStats.ordersGrowth}%`,
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      title: 'Total Products',
      value: mockStats.totalProducts.toLocaleString(),
      change: '+5.2%',
      changeType: 'positive',
      icon: Package,
      color: 'purple'
    },
    {
      title: 'Total Customers',
      value: mockStats.totalCustomers.toLocaleString(),
      change: '+3.1%',
      changeType: 'positive',
      icon: Users,
      color: 'orange'
    }
  ];

  const recentActivity = [
    { action: 'New order placed', details: 'Order #ORD-1247 for $299.99', time: '2 minutes ago' },
    { action: 'Product updated', details: 'Wireless Headphones stock updated', time: '15 minutes ago' },
    { action: 'Customer registered', details: 'john.doe@example.com joined', time: '1 hour ago' },
    { action: 'Payment received', details: 'Order #ORD-1246 payment confirmed', time: '2 hours ago' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`text-${stat.color}-600`} size={24} />
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="text-green-500" size={16} />
                ) : (
                  <TrendingDown className="text-red-500" size={16} />
                )}
                <span className={`text-sm font-medium ml-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Sales chart visualization would go here</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
