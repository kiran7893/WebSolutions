import React from 'react';
import { Link } from 'react-router-dom';

export const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', description: 'Query about product X' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', description: 'Issue with service Y' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', mobile: '5555555555', description: 'Feedback on recent update' },
];

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Blue gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          
          {/* Main content */}
          <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">G-TEC</h1>
                <p className="mt-3 text-xl text-gray-600">Admin Dashboard</p>
              </header>
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Queries/Requests</h2>
                <div className="overflow-x-auto bg-gray-50 rounded-xl shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockData.map((query) => (
                        <tr key={query.id} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/customer/${query.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800">{query.id}</Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/customer/${query.id}`} className="text-sm text-gray-900 hover:text-gray-700">{query.name}</Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{query.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;