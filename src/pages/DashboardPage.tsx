import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/dashboard-page.scss';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  roles: { name: string }[];
}

interface DashboardProps {
  user: User;
  messageSuccess?: string;
  messageError?: string;
}

const DashboardPage: React.FC<DashboardProps> = ({ user, messageSuccess, messageError }) => {
  const revenueChartRef = useRef<HTMLCanvasElement>(null);
  const clientAcquisitionChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (revenueChartRef.current) {
      new Chart(revenueChartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Revenue',
            data: [65000, 72000, 80000, 85000, 90000, 92000, 95000, 98000, 100000, 105000, 110000, 115000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '$' + value.toLocaleString();
                }
              }
            }
          }
        }
      });
    }

    if (clientAcquisitionChartRef.current) {
      new Chart(clientAcquisitionChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
            label: 'New Clients',
            data: [500, 600, 450, 700],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 100
              }
            }
          }
        }
      });
    }
  }, []);

  const handleFileUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle file upload logic here
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.href = e.target.value;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-6 h-screen w-64 hidden md:block">
        <a href="#" className="flex items-center mb-6">
          <span className="text-2xl font-bold">BrokerConnect</span>
        </a>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-home mr-3"></i>
                <span>Dashboard</span>
              </a>
            </li>
            {user.roles[0].name === 'ROLE_ADMIN' && (
              <li>
                <a href="/users" className="flex items-center text-gray-300 hover:text-white">
                  <i className="fas fa-users mr-3"></i>
                  <span>Brokers</span>
                </a>
              </li>
            )}
            <li>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-chart-line mr-3"></i>
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-cog mr-3"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm mb-6 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-gray-700 mr-4 md:hidden">
              <i className="fas fa-bars"></i>
            </button>
            <div className="relative">
              <input type="text" className="bg-gray-100 border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search..." />
              <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleLanguageChange}>
              <option value="?lang=en">English</option>
              <option value="?lang=rw">Kinyarwanda</option>
            </select>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <i className="fas fa-bell"></i>
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <a href="/logout" className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </div>
        </header>

        {/* Page Content */}
        <div>
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.firstName}!</h1>
            <p className="text-gray-600">Here's what's happening with your brokerage today.</p>
          </div>

          {/* Upload File/Photo */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upload File/Photo</h2>
            <form onSubmit={handleFileUpload}>
              <div className="mb-4">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">File</label>
                <input type="file" id="file" name="file" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Upload
              </button>
            </form>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* ... Stats cards remain the same ... */}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Over Time</h2>
              <canvas ref={revenueChartRef}></canvas>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Client Acquisition</h2>
              <canvas ref={clientAcquisitionChartRef}></canvas>
            </div>
          </div>

          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-medium text-gray-800 mt-1">{`${user.firstName} ${user.lastName}`}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="font-medium text-gray-800 mt-1">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <span className="inline-block px-3 py-1 mt-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  {user.roles[0].name}
                </span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {messageSuccess && (
            <div className="mt-4 p-4 text-green-700 bg-green-100 rounded-lg">
              <i className="fas fa-check-circle mr-2"></i>
              <span>{messageSuccess}</span>
            </div>
          )}
          {messageError && (
            <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-lg">
              <i className="fas fa-exclamation-circle mr-2"></i>
              <span>{messageError}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;