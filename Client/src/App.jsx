import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ServicesPage from "./pages/ServicePage";
import WebsiteCostCalculator from "./components/Calculator";
import ScrollToTop from "./components/ScrollToTop"; // Make sure to create this file

const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/calculator" element={<WebsiteCostCalculator />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
