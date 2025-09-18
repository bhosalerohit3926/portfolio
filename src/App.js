import React from "react";
import Home from "./routes/Home";
// import Home from "./Screens/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetail from "./routes/ProjectDetail";

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectDetail" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
