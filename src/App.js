import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Buttons from "./Components/Button";
import Cards from "./Components/Cards";
import Tables from "./Components/Table";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Buttons />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/table" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
