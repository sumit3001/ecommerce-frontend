import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Loader from "./layout/Loader";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
