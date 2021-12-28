import React from 'react'
import Sidebar from "./Sidebar";
import './admindashboard.css'
import Header from "../../components/Header";
import Body from "./Body";
import {Container} from "react-bootstrap";
import {  useSelector } from 'react-redux'
function Dashboard(history) {
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin
if (!adminInfo.is_superuser===true){
     document.location.href = '/userprofile'
}
    console.log(adminInfo)

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