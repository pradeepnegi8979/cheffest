import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import Home from "./component/Home.jsx";
import Aboutus from "./component/AboutUs.jsx";
import ContactUs from "./component/ContctUs.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import FoodDetails from "./component/swiggy/food-delivery/FoodDetails.jsx";
import { Provider } from "react-redux";
import CheckOut from "./component/swiggy/food-delivery/CheckOut.jsx";
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <Aboutus />,
  },
  {
    path: "cart",
    element: <CheckOut />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "/:id",
    element: <FoodDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={allRoutes} />
    </Provider>
  </StrictMode>
);
