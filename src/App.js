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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
  }, []);

  return (
    <div>
      <Toaster />
      <button onClick={e=>{
        dispatch(logout());
        window.location.reload();
      }}>
        Logout
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminWrapper><Admin/></AdminWrapper>} />
      </Routes>
    </div>
  );
};

export default App;
