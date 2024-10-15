import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ServicesPage from "./pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
