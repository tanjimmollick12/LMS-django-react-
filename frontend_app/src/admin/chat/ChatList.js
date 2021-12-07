import React from 'react'
import Header from "../../components/Header";
import {Container, Link} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import {ArrowForward} from "@material-ui/icons";
import {LinkContainer} from "react-router-bootstrap";

const ChatList = () => {
    return (
        <div>
            <Header/>
            <br/>

            <Container>
                <h1>Chats</h1>
                <Col>
                    <LinkContainer to='/chatbody' className={'link'}>
                        <Row>
                            <Col sm={10} md={5} lg={3} xl={2}>
                                <h4>Mr John</h4>

                            </Col>
                            <Col style={{width: "20px"}}>
                                <ArrowForward/>
                            </Col>
                        </Row>

                    </LinkContainer>
                </Col>

                <Col>
                    <LinkContainer to='/chatbody' className={'link'}>
                        <Row>
                            <Col sm={13} md={7} lg={5} xl={4}>
                                <h4>Mrvbvhfjghfg Johnhnfyjfhgfhgf</h4>

                            </Col>
                            <Col style={{width: "20px"}}>
                                <ArrowForward/>
                            </Col>
                        </Row>

                    </LinkContainer>
                </Col>
            </Container>

        </div>
    )
}

export default ChatList
