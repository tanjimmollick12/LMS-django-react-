import React, {useState} from 'react'
import './newloanee.css'
import Header from "../../components/Header";
import axios from 'axios'
import {useSelector} from 'react-redux'

function AddLoanee() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [loan_amount, setLoanAmount] = useState()
    const [rate, setRate] = useState()
    const [time, setTime] = useState()
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const handleSelect = (e) => {
        setGender(e.target.value)
    }
    const [message, setMessage] = useState()

    // setUsername(name)
    // setPassword(mobile)
    const data = {username,email,password,name,gender,loan_amount,rate,time,address,mobile}
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin


    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }


    async function addHandler() {
        console.log(data)
        await axios.post('http://localhost:8000/api/addloanee', data, config)
            .then(resp => {
                setMessage(resp.data.message)
            })
            .catch(error => console.log(error.message))

    }


    return (
        <div>
            <Header/>

            <div style={{padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5"}}>
                <div className="newLoanee">
                    <h1 className="addLoaneeTitle">Add Loanee</h1>
                    <form className="addLoaneeForm">
                        <div className="addLoaneeItem">
                            <label>Name</label>
                            <input type="text" placeholder="First Name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>

                        </div>
                        <div className="addLoaneeItem">
                            <label>Email</label>
                            <input type="text" placeholder="Email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>

                        </div>

                        <div className="addLoaneeItem">
                            <label>Username</label>
                            <input type="text" placeholder="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>

                        </div>

                        <div className="addLoaneeItem">
                            <label>Password</label>
                            <input type="text" placeholder="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>

                        </div>

                        <div className="addLoaneeItem">
                            <label>Gender</label>
                            <select

                                defaultValue={gender}
                                onChange={handleSelect}
                                name="active" id="active">
                                <option value="Man">Man</option>
                                <option value="Woman">Woman</option>
                                <option value="Child">Child</option>

                            </select>
                        </div>

                        <div className="addLoaneeItem">
                            <label>Loan Amount</label>
                            <input type="number" placeholder="2145000"
                                   value={loan_amount}
                                   onChange={(e) => setLoanAmount(parseFloat(e.target.value))}/>


                        </div>
                        <div className="addLoaneeItem">
                            <label>Rate</label>
                            <input type="number" placeholder="4.5%"
                                   value={rate}
                                   onChange={(e) => setRate(parseFloat(e.target.value))}/>
                        </div>
                        <div className="addLoaneeItem">
                            <label>Time</label>
                            <input type={"number"} placeholder="2(Year)"
                                   value={time}
                                   onChange={(e) => setTime(parseFloat(e.target.value))}/>
                        </div>
                        <div className="addLoaneeItem">
                            <label>Address</label>
                            <input type="text" placeholder="Block B, Basundhara, Dhaka "
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div className="addLoaneeItem">
                            <label>Contact</label>
                            <input type="text" placeholder="01625525869"

                                   value={mobile}
                                   onChange={(e) => setMobile(e.target.value)}/>

                        </div>
                    </form>
                </div>

                <button type="submit" className="addLoaneeButton" onClick={addHandler}>Add Loanee</button>

            </div>

        </div>
    )
}

export default AddLoanee
