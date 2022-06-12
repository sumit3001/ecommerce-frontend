import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Loader from "./layout/Loader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoadUser } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
  }, []);

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
