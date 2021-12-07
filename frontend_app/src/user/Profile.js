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


export default function User() {


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
                                <span className="userShowUsername">Mr. John</span>
                                <span className="userShowUserTitle">Male</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>

                            <div className="userShowInfo">
                                <Money className="userShowIcon"/>
                                <span className="userShowInfoTitle">Lend: 256000</span>
                                <span className="userShowInfoTitle">Due: 256000</span>
                            </div>
                            <span className="userShowTitle">Personal Info</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon"/>
                                <span className="userShowInfoTitle">01744112233</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon"/>
                                <span className="userShowInfoTitle">District | Sub_District  </span>
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
                                <Row style={{width: '50%'}}>

                                    <Col>1st EMI</Col>
                                    <Col>36500 TK</Col>
                                </Row>
                                <br/>
                                <Row style={{width: '50%'}}>

                                    <Col>2nd EMI</Col>
                                    <Col>36500 TK</Col>
                                </Row>
                                <br/>
                                <Row style={{width: '50%'}}>

                                    <Col>3rd EMI</Col>
                                    <Col>36500 TK</Col>
                                </Row>

                            </Container>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

