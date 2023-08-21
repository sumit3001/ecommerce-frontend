import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoadUser, logout } from "./redux/actions/auth";
import Signup from "./components/auth/Signup";
import Admin from "./components/admin/Admin";
import AdminWrapper from "./components/HOC/AdminWrapper";
import Navbar from "./layout/Navbar";
import { getProduct } from "./redux/actions/product";
import Products from "./components/product/Products";
import Footer from "./layout/Footer";
import Product from "./components/product/Product";
import { loadCart } from "./redux/actions/cart";
import Cart from "./components/cart/Cart";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
    dispatch(getProduct());
    dispatch(loadCart());
  }, []);

  return (
    <div>
      <Toaster />
      {/* <button onClick={e=>{
        dispatch(logout());
        window.location.reload();
      }}>
        Logout
      </button> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin"
          element={
            <AdminWrapper>
              <Admin />
            </AdminWrapper>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
