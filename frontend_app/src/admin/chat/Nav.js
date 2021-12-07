import React, { Component } from "react";
import './nav.css'
import logo from './image/logo.png'
const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__blocks">
                <img src={logo}></img>
            </div>
            <div className="nav__blocks"></div>
            <div className="nav__blocks"></div>
        </div>

    )
}

export default Nav
