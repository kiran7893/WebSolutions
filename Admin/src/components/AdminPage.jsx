import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "./pagination"; // Adjust the import path as necessary

const AdminPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5); // Set items per page

  useEffect(() => {
    // Fetch customer data from API
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:8080/admin/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        let data = await response.json();
        data.reverse(); // to show the latest data first
        setCustomers(data); // Assuming 'data' is an array of customer objects
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data", err);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Pagination logic
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                <h1 className="text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  TechBuddyz
                </h1>
                <p className="mt-3 text-xl text-gray-600">Admin Dashboard</p>
              </header>

              {/* Navigation */}
              <nav className="mb-8">
                <ul className="flex justify-center space-x-6">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `text-lg font-semibold ${
                          isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-blue-500"
                        }`
                      }
                    >
                      Queries
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/appointments"
                      className={({ isActive }) =>
                        `text-lg font-semibold ${
                          isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-blue-500"
                        }`
                      }
                    >
                      Appointments
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  Queries/Requests
                </h2>
                <div className="overflow-x-auto bg-gray-50 rounded-xl shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentCustomers.map((query) => (
                        <tr
                          key={query._id}
                          className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/customer/${query._id}`}
                              className="text-sm font-medium text-blue-600 hover:text-blue-800"
                            >
                              {query.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/customer/${query._id}`}
                              className="text-sm text-gray-900 hover:text-gray-700"
                            >
                              {query.email}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {query.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="mt-6">
                  <Pagination
                    customersPerPage={customersPerPage}
                    totalCustomers={customers.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
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
