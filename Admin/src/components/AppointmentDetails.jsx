import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const AppointmentDetailsPage = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/appointments/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch appointment details");
        }
        const data = await response.json();
        setAppointment(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Appointment Details
              </h1>
            </header>
            {appointment && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Name</h2>
                  <p className="text-lg text-gray-600">{appointment.name}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Email
                  </h2>
                  <p className="text-lg text-gray-600">{appointment.email}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Date</h2>
                  <p className="text-lg text-gray-600">
                    {new Date(appointment.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Time</h2>
                  <p className="text-lg text-gray-600">{appointment.time}</p>
                </div>
              </div>
            )}
            <div className="mt-8">
              <Link
                to="/appointments"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Back to Appointments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsPage;
