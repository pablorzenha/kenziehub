import { Route, Routes } from "react-router-dom";
import "./App.css";
import LadingPage from "./Pages/LadingPage";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<LadingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
