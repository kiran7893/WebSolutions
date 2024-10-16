import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CustomerDetails = () => {
  const { id } = useParams(); // Capture customer ID from URL (assume this is MongoDB's ObjectId)
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch customer details");
        }
        const data = await response.json();
        setCustomer(data); // Assuming 'data' is the customer object
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleReply = () => {
    // Implement reply functionality here
    if (customer) {
      console.log("Replying to:", customer.name);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!customer) return <div>Customer not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Blue gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          {/* Main content */}
          <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
              <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Customer Details
                </h1>
              </header>
              <div className="bg-gray-50 shadow rounded-xl p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {customer.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <p className="mt-1 text-lg text-gray-900">{customer.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description:
                  </label>
                  <p className="mt-1 text-lg text-gray-900">
                    {customer.description}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Back to Admin Panel
                </Link>
                <button
                  onClick={handleReply}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                >
                  Reply to Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
