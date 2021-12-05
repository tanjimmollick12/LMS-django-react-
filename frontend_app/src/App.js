
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import React, {Fragment} from "react";
import Register from "./admin/signup/Register";
import Login from "./admin/signin/Login";
import LoaneeList from "./admin/loanee/LoaneeList";
import Dashboard from "./admin/dashboard/Dashboard";
import AddLoanee from "./admin/loanee/AddLoanee";
import AddLoan from "./admin/dashboard/AddLoan";
function App() {
    return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loanee" element={<LoaneeList />} />
          <Route path="/addloanee" element={<AddLoanee />} />
          <Route path="/addloan" element={<AddLoan />} />

      </Routes>
    </BrowserRouter>


    );
}

export default App;
