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
import Profile from "./user/Profile"
import SignIN from "./user/SignIn";
import ChatBody from "./admin/chat/ChatBody";
import ChatList from "./admin/chat/ChatList";
import AddEmi from "./admin/loanee/AddEmi";
import LoaneeDetails from "./admin/loanee/LoaneeDetails";
function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/loanee" element={<LoaneeList/>}/>
                <Route path="/addloanee" element={<AddLoanee/>}/>
                <Route path="/addloan" element={<AddLoan/>}/>
                <Route path="/signin" element={<SignIN/>}/>
                <Route path="/userProfile" element={<Profile/>}/>
                <Route path="/chatlist" element={<ChatList/>}/>
                <Route path="/chatbody" element={<ChatBody/>}/>
                <Route path="/addemi" element={<AddEmi/>}/>
                <Route path="/loaneedetails" element={<LoaneeDetails/>}/>

            </Routes>
        </BrowserRouter>


    );
}

export default App;
