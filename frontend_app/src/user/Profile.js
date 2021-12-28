import {
    Chat,
    LocationSearching,
    Money,
    PhoneAndroid,

} from "@material-ui/icons";
import Header from "../components/Header";
import {Col, Container, Row, Table} from 'react-bootstrap'

import "./user.css";
import * as React from 'react';
import Button from '@material-ui/core/Button';
import {LinkContainer} from "react-router-bootstrap";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";


export default function User() {

    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin
    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    const [emi, setEmi] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8000/api/emilist', config)
            .then(resp => {
                setEmi(resp.data)
            })
    }, [])
    console.log(emi)
    return (
        <>
        <Header/>
        <div className="user">


            <div className="userTitleContainer">
                <h1 className="userUpdateTitle">Loanee Details</h1>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{adminInfo.name}</span>
                            <span className="userShowUserTitle">{adminInfo.gender}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <Money className="userShowIcon"/>
                            <span className="userShowInfoTitle">Lend: {adminInfo.loan_amount} TK</span>

                        </div>
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Total Payable: {adminInfo.total_payable} TK</span>

                        </div>


                        <span className="userShowTitle">Personal Info</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">{adminInfo.mobile}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">{adminInfo.address} </span>
                        </div>
                        <div>

                            <span className="userShowTitle">Action</span>
                        </div>
                        <br/>

                        <div style={{float: 'right'}}>
                            <LinkContainer to="/edit">
                                <Button>Change PW</Button>
                            </LinkContainer>

                        </div>
                        <div style={{float: 'left'}}>

                            <LinkContainer to="/chatroom">
                                <Chat> </Chat>
                            </LinkContainer>

                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">EMI History</span>
                    <div style={{height: 400, width: '100%'}}>
                        <br/>
                        <Container>

                        {emi.map((e) => (

                            <Row>
                                {e.emi_amount} Tk
                                <br/>
                            </Row>

                        ))}



                    </Container>

                </div>
            </div>
        </div>
        </div>
</>
)
    ;

}

