import React from "react";
import "./App.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NewVideo from "./components/NewVideo";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="video-app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewVideo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
