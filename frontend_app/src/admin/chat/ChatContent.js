import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/Header";
import {Chat, LocationSearching, Money, PhoneAndroid} from "@material-ui/icons";
import {LinkContainer} from "react-router-bootstrap";
import './chatcontent.css'
const ChatContent = () => {
    return (
  <>
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userUpdateTitle">MR JOHN</h1>
                </div>
                <div className="chat-container">

                    <div className="chat-body">
                        <span className="userUpdateTitle">Chat History</span>
                        <div style={{height: 400, width: '100%'}}>
                            <br/>
                            <Container>


                            </Container>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatContent
