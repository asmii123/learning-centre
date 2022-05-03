import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Cards from "./components/Card";
// import Body from "./components/Body";
// import Subjects from "./components/Subjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/subjects" element={<SubjectScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
