import Home from "./components/Home/home";
import Header from "./components/Layouts/Header/header";
import React from "react";
import RealTimeFD from "./components/Pages/RealTimeFD/realTimeFD";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<RealTimeFD />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
