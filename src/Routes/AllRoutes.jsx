import { Route, Routes } from "react-router-dom";
import CartPage from "../component/CartPage";
import CheckoutPage from "../component/CheckoutPage";
import OtpPage from "../component/OtpPage";
import ProductPage from "../component/ProductPage";
import HomePage from "../components/HomePage/HomePage";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/product"
        element={
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/otp"
        element={
          <PrivateRoutes>
            <OtpPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
