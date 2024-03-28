import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
