import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars'
import Header from "../../components/Header";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";

const Chat = () => {

    const id = useParams()
    const receiver = parseInt(id.id)
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin
    let sender = adminInfo.id
    const [message, setMessage] = useState()
    const data = {sender, receiver, message}
    console.log(data)
    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }


    async function senMessage() {
        await axios.post(`http://localhost:8000/api/message/send_message`, data, config)
            .then(resp => {
                setMessage(resp.data.message)
            })
            .catch(error => console.log(error.message))
        document.location.href = '/chatbody/:id'
    }

    const [text, setText] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/message/read_admin_message/${receiver}/`, config)
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
                                        <h6>You</h6>
                                    ) : (
                                        <h6>User</h6>

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
export default Chat
