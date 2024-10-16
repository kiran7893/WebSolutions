import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import CustomerDetails from "./components/CustomerDetails";
import AppointmentPage from "./components/Appointment";
import AppointmentDetails from "./components/AppointmentDetails"; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />{" "}
        {/* Updated path */}
        <Route path="/appointments/:id" element={<AppointmentDetails />} />{" "}
        {/* New route for appointment details */}
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
