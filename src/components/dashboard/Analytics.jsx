import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

export default function Analytics(){
  const salesData = [
    { month: 'Jan', sales: 42000, orders: 120 },
    { month: 'Feb', sales: 38000, orders: 98 },
    { month: 'Mar', sales: 45000, orders: 135 },
    { month: 'Apr', sales: 52000, orders: 162 },
    { month: 'May', sales: 48000, orders: 148 },
    { month: 'Jun', sales: 58000, orders: 185 },
  ];

  const topProducts = [
    { name: 'Wireless Bluetooth Headphones', sales: 245, revenue: 48995 },
    { name: 'Smart Fitness Watch', sales: 189, revenue: 56691 },
    { name: 'Professional Coffee Maker', sales: 156, revenue: 23394 },
    { name: 'Organic Cotton T-Shirt', sales: 134, revenue: 4016 },
  ];

  const customerMetrics = [
    { label: 'New Customers', value: 156, change: 12.5, trend: 'up' },
    { label: 'Returning Customers', value: 234, change: 8.2, trend: 'up' },
    { label: 'Customer Retention', value: '78%', change: -2.1, trend: 'down' },
    { label: 'Avg. Order Value', value: '$89.45', change: 15.3, trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your business performance and insights</p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${
                metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="text-green-600" size={24} />
                ) : (
                  <TrendingDown className="text-red-600" size={24} />
                )}
              </div>
            </div>
            <div className="flex items-center mt-4">
              {metric.trend === 'up' ? (
                <TrendingUp className="text-green-500" size={16} />
              ) : (
                <TrendingDown className="text-red-500" size={16} />
              )}
              <span className={`text-sm font-medium ml-1 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {Math.abs(metric.change)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Sales & Orders Trend</h2>
        <div className="space-y-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900 w-12">{data.month}</span>
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={16} className="text-green-600" />
                      <span className="text-sm text-gray-600">Sales: ${data.sales.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShoppingCart size={16} className="text-blue-600" />
                      <span className="text-sm text-gray-600">Orders: {data.orders}</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${(data.sales / 60000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products & Customer Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${product.revenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Insights */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Customer Insights</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="text-blue-600" size={24} />
                <h3 className="font-medium text-gray-900">Customer Demographics</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 25-34</span>
                  <span className="text-sm font-medium">38%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 35-44</span>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 45+</span>
                  <span className="text-sm font-medium">34%</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="text-green-600" size={24} />
                <h3 className="font-medium text-gray-900">Growth Metrics</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Monthly Active Users</span>
                  <span className="text-sm font-medium text-green-600">+18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Customer Lifetime Value</span>
                  <span className="text-sm font-medium text-green-600">+22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Repeat Purchase Rate</span>
                  <span className="text-sm font-medium text-green-600">+15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

