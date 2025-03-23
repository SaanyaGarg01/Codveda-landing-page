import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
