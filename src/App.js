import "./App.css";
import Login from "./screens/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Profile from "./screens/Profile/Profile";
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact index element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer limit={1} autoClose={2000} />
    </>
  );
}

export default App;
