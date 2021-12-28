import React, {useEffect, useState} from 'react';
import {Container, Nav, NavDropdown, Row} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars'
import {useSelector} from "react-redux";
import axios from "axios";
import Header from "../components/Header";
import {ArrowForward} from "@material-ui/icons";
import {LinkContainer} from "react-router-bootstrap";

const ChatRoom = () => {
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    // setSender(adminInfo.id)
    // const [receiver,setReceiver]=useState()
    // setReceiver(1)

    // console.log(data)
    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }
    let sender = adminInfo.id
    let receiver = 1
    const [message, setMessage] = useState()
    const data = {sender, receiver, message}

    async function senMessage() {
        await axios.post(`http://localhost:8000/api/message/send_message`, data, config)
            .then(resp => {
                setMessage(resp.data.message)
            })
            .catch(error => console.log(error.message))

        document.location.href = '/chatRoom'
    }

    const [text, setText] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8000/api/message/read_message', config)
            .then(resp => {
                setText(resp.data)
            })
    }, [])

    return (<div>
            <Header/>

            <Container>
                <br/>
                <Scrollbars
                    style={{
                        padding: "10px 10px 35px 580px",
                        backgroundColor: "#f5f5f5",
                        height: "500px",
                        width: "80%"
                    }}>
                    <Row>

                        {
                            text.map((t) => (
                                <h3 key={t.id}>

                                    <span>{t.message}</span>
                                    <br/>


                                    {t.sender === 1 ? (
                                        <h6>Admin</h6>
                                    ) : (
                                        <h6>You</h6>

                                    )}


                                </h3>
                            ))

                        }

                    </Row>
                </Scrollbars>
                <br/>
                <div style={{display: "flex"}}>

                    <textarea
                        style={{
                            height: "80px",
                            width: "65%"
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>

                    <button type="submit" className="addLoaneeButton"
                            style={{

                                height: "80px",
                                width: "15%",

                            }}
                            onClick={senMessage}
                    >Send
                    </button>


                </div>


            </Container>


        </div>

    )

}
export default ChatRoom
