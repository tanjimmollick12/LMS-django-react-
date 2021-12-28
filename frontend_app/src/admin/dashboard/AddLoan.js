import React, {useState} from 'react'
import axios from 'axios'
import '../loanee/newloanee.css'
import Header from "../../components/Header";
import {useSelector} from 'react-redux'
import Message from "../../components/Message";

function AddLoan() {

    const [name, setName] = useState('')
    const [rate, setRate] = useState('')
    const [time, setTime] = useState('')
    const [description, setDescription] = useState('')

    const [message, setMessage] = useState()
    const data = {name, rate, time, description}
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }


    async function addHandler() {
        await axios.post('http://localhost:8000/api/addloan', data, config)
            .then(resp => {
                setMessage(resp.data.name+" is created")
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div>
            <Header/>
            <Message variant='green'>{message}</Message>
            <div style={{padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5"}}>
                <div className="newLoanee">
                    <h1 className="addLoaneeTitle">New Loan</h1>
                    <form className="addLoaneeForm">
                        <div className="addLoaneeItem">
                            <label>Title</label>
                            <input type="text" placeholder="Car Loan"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="addLoaneeItem">
                            <label>Rate</label>
                            <input type="number" placeholder="4.5%"

                                   value={rate}
                                   onChange={(e) => setRate(e.target.value)}/>
                        </div>
                        <div className="addLoaneeItem">
                            <label>Time</label>
                            <input type={"number"} placeholder="2(Year)"
                                   value={time}
                                   onChange={(e) => setTime(e.target.value)}/>

                        </div>
                        <div className="addLoaneeItem">
                            <label>Description</label>
                            <textarea placeholder="Loan amount ranging from BDT 3 lac to BDT 40 lac"
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                    </form>
                </div>

                <button type="submit" className="addLoaneeButton" onClick={addHandler}>Add Loan</button>

            </div>

        </div>
    )
}

export default AddLoan
