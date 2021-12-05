import React from 'react'
import Sidebar from "./Sidebar";
import './admindashboard.css'
import Header from "../../components/Header";
import Body from "./Body";
import {Container} from "react-bootstrap";
function Dashboard(history) {

    return (

        <div>
            <Header/>

            <div className='side'>
                <Sidebar/>
                <div className='home'>
                    <Container>
                              <Body/>

                    </Container>

                </div>

            </div>

        </div>
    )
}

export default Dashboard