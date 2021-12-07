import React from 'react'
import Header from "../../components/Header";

const AddEmi = () => {
    return (
        <div>
            <Header/>
            <div style={{padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5"}}>

                <div className="newLoanee">
                    <h1 className="addLoaneeTitle">Add EMI</h1>
                    <form className="addLoaneeForm">
                        <div className="addLoaneeItem">
                            <label>Amount</label>
                            <input type="number" placeholder="45000"/>
                            <br/>
                        </div>
                    </form>
                </div>
                <button type="submit" className="addLoaneeButton" >Add EMI</button>
            </div>
        </div>
    )
}

export default AddEmi
