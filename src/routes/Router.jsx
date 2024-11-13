import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import PreOrder from "../pages/PreOrder";
import AllGadgets from "../components/AllGadgets";
import GadgetDetails from "../pages/GadgetDetails";
import Cart from "../pages/Carts";
import Wishlist from "../pages/Wishlist";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    loader: () => fetch("../gadgets.json"),

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "allGadgets",
            element: <AllGadgets></AllGadgets>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "preOrder",
        element: <PreOrder></PreOrder>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export { routes };
