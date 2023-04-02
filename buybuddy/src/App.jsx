//Hooks
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddCollection from "./pages/AddCollection/AddCollection";
import ProductList from "./pages/ProductList/ProductList";
import AddProduct from "./pages/AddProduct/AddProduct";
import ShoppingList from "./pages/ShoppingList/ShoppingList";

//Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//CSS
import "./App.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add-collection", element: <AddCollection /> },
      { path: "/:id/products", element: <ProductList /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/shopping-list", element: <ShoppingList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
