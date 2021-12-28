import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import React from "react";
import Register from "./admin/signup/Register";
import Login from "./admin/signin/Login";
import LoaneeList from "./admin/loanee/LoaneeList";
import Dashboard from "./admin/dashboard/Dashboard";
import AddLoanee from "./admin/loanee/AddLoanee";
import AddLoan from "./admin/dashboard/AddLoan";
import Profile from "./user/Profile"
import SignIN from "./user/SignIn";
import Chat from "./admin/chat/Chat"

import AddEmi from "./admin/loanee/AddEmi";
import {createBrowserHistory} from 'history';
import LoaneeDetails from "./admin/loanee/LoaneeDetails";
import ChatList from "./admin/chat/ChatList";
import chatRoom from "./user/chatRoom";
import ChatRoom from "./user/chatRoom";

function App() {
    const history = createBrowserHistory();
    return (
        <switch>
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
                        <Route path="/chatbody/:id" element={<Chat/>}/>
                        <Route path="/chatroom" element={<ChatRoom/>}/>
                        <Route path="/addemi/:id" element={<AddEmi/>} exact/>
                        <Route path="/loaneedetails" element={<LoaneeDetails/>}/>
                </Routes>
            </BrowserRouter>

        </switch>


    );
}

export default App;
