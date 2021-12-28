import React, {useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from "../../components/Header";
import Message from "../../components/Message";

const AddEmi = () => {
    const id = useParams()
    const loanee_id =  parseInt(id.id)
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin
    const [emi_amount, setEmiAmount] = useState()
    const data = {loanee_id,emi_amount}
    console.log(data)
    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }
    const [message, setMessage] = useState()

    async function addEmi() {
        await axios.post(`http://localhost:8000/api/addemi/${loanee_id}/`, data, config)
            .then(resp => {
                setMessage(resp.data.message)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <Header/>

            <Message variant='green'>{message}</Message>
            <div style={{padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5"}}>

                <div className="newLoanee">
                    <h1 className="addLoaneeTitle">Add EMI</h1>
                    <form className="addLoaneeForm">
                        <div className="addLoaneeItem">
                            <label>Amount</label>
                            <input type="number" placeholder="45000"
                                   value={emi_amount}
                                   onChange={(e) => setEmiAmount(e.target.value)}/>

                            <br/>
                        </div>
                    </form>
                </div>
                <button type="submit" className="addLoaneeButton"
                        onClick={addEmi}
                >Add EMI
                </button>
            </div>
        </div>
    )
}

export default AddEmi
