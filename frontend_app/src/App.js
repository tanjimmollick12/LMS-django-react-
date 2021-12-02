
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import React, {Fragment} from "react";
import Register from "./admin/signup/Register";
import Login from "./admin/signin/Login";
function App() {
    return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>


    );
}

export default App;
