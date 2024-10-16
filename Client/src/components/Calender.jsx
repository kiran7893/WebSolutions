import { useState } from "react";
import { motion } from "framer-motion";

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const handleDateSelect = (day) => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
    );
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    setShowDialog(true);
  };

  const validateInputs = () => {
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Invalid email format";
    return null;
  };

  const handleConfirmAppointment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const validationError = validateInputs();
    if (validationError) {
      setErrorMessage(validationError);
      setLoading(false);
      return;
    }

    const appointmentData = {
      name,
      email,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    };

    const baseUrl = "http://localhost:8080"; // Replace with your actual API base URL

    try {
      const response = await fetch(`${baseUrl}/api/appointments`, {
        method: "POST",
        body: JSON.stringify(appointmentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book appointment");
      }

      const result = await response.json();
      console.log("Appointment booked successfully:", result);
      alert("Appointment booked successfully!");
      setShowDialog(false);
      setName("");
      setEmail("");
      setSelectedTime(null);
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMessage(
        error.message || "Failed to book appointment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderCalendar = () => {
    const days = [];
    const currentDate = new Date();
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate.getDate();
      // eslint-disable-next-line no-unused-vars
      const isToday =
        day === currentDate.getDate() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear();
      const isPast =
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day) <
        new Date().setHours(0, 0, 0, 0);

      let buttonClass =
        "p-2 rounded-md text-white font-medium transition duration-300 ease-in-out ";
      if (isSelected) {
        buttonClass += "bg-purple-600";
      } else if (isPast) {
        buttonClass += "bg-gray-700 cursor-not-allowed";
      } else {
        buttonClass += "bg-gray-600 hover:bg-purple-700";
      }

      days.push(
        <motion.button
          key={day}
          onClick={() => !isPast && handleDateSelect(day)}
          className={buttonClass}
          whileHover={!isPast ? { scale: 1.1 } : {}}
          whileTap={!isPast ? { scale: 0.95 } : {}}
          disabled={isPast}
        >
          {day}
        </motion.button>
      );
    }
    return days;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full space-y-8 bg-gray-900 p-8 rounded-xl border-2 border-purple-500 shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-8"
        >
          Book Your Appointment
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Select a Date
            </h2>
            <div className="grid grid-cols-7 gap-1 border border-gray-700 p-2 rounded-lg">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-gray-500 font-medium"
                >
                  {day}
                </div>
              ))}
              {renderCalendar()}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Available Time Slots
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`p-2 rounded-md text-white font-medium transition duration-300 ease-in-out ${
                    selectedTime === time
                      ? "bg-purple-600"
                      : "bg-gray-800 hover:bg-purple-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={handleBookAppointment}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Book Appointment
            </button>
          </motion.div>
        )}

        {showDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div className="bg-gray-800 p-6 rounded-lg border-2 border-purple-500 max-w-md w-full">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Confirm Your Appointment
              </h3>
              <p className="text-white mb-2">
                Date: {selectedDate.toDateString()}
              </p>
              <p className="text-white mb-4">Time: {selectedTime}</p>
              <form onSubmit={handleConfirmAppointment} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setShowDialog(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mr-4 transition duration-300 ease-in-out"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    disabled={loading}
                  >
                    {loading ? "Booking..." : "Confirm Booking"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AppointmentCalendar;
