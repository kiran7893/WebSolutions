import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "./pagination"; // Adjust the import path as necessary

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]); // State for appointments
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5); // Set items per page

  useEffect(() => {
    // Fetch appointment data from API
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/appointments");
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        data.reverse(); // Show the latest data first
        setAppointments(data); // Assuming 'data' is an array of appointment objects
        setLoading(false);
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Pagination logic
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
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
                  G-TEC
                </h1>
                <p className="mt-3 text-xl text-gray-600">Admin Dashboard</p>
              </header>
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  Appointments
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
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentAppointments.map((appointment) => (
                        <tr
                          key={appointment._id}
                          className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/appointment/${appointment._id}`} // Link to appointment details
                              className="text-sm font-medium text-blue-600 hover:text-blue-800"
                            >
                              {appointment.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(appointment.date).toLocaleDateString()}{" "}
                            {/* Format the date */}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {appointment.time}{" "}
                            {/* Display the appointment time */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="mt-6">
                  <Pagination
                    itemsPerPage={appointmentsPerPage} // Changed prop name for clarity
                    totalItems={appointments.length} // Changed to match context
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

export default AppointmentPage;
