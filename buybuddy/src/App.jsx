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
import EditProduct from "./pages/EditProduct/EditProduct";
import ShoppingList from "./pages/ShoppingList/ShoppingList";

//Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//CSS
import "./App.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import NotFound from "./pages/NotFound/NotFound";

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") != null
  );

  const [user, setUser] = useState();
  useEffect(() => {
    const authToken = window.localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}users/authenticated-user`, {
      method: "get",
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, [loggedIn]);

  return (
    <div>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn, user]} />
      {/* <Footer /> */}
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
      { path: "/:id/add-product", element: <AddProduct /> },
      { path: "/:id/edit-product", element: <EditProduct /> },
      { path: "/shopping-list", element: <ShoppingList /> },
      // { path: "/contact-us", element: <ContactUs />},
      // { path: "/meet-the-team", element: <MeetTheTeam />},
      // { path: "/how-it-works", element: <HowItWorks />},
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
