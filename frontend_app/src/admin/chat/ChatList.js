import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap";
import Header from "../../components/Header";
import {Add, ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";

const ChatList = () => {
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    const [loanee, setLoanee] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8000/api/loaneelist', config)
            .then(resp => {
                setLoanee(resp.data)
            })
    }, [])

    return (
        <div>

            <Container>
                <Header/>
                <br/>

                {
                    loanee.map((l) => (
                        <h3 key={l.id}>
                            <Link to={`/chatbody/${l.id}`} className="link">
                                <span>{l.name}</span>
                                <ArrowForward></ArrowForward>
                            </Link>
                        </h3>
                    ))

                }


            </Container>

        </div>
    )
}

export default ChatList
