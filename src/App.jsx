import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TestPage from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/test" element = {<TestPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
