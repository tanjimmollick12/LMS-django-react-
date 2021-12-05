import React from 'react'
import '../loanee/newloanee.css'
import Header from "../../components/Header";
function AddLoanee() {

    return (
        <div>
            <Header/>

      <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>
        <div className="newLoanee">
          <h1 className="addLoaneeTitle">New Loan</h1>
          <form className="addLoaneeForm">
            <div className="addLoaneeItem">
              <label>Title</label>
              <input type="text" placeholder="Car Loan"/>
            </div>

            <div className="addLoaneeItem">
              <label>Rate</label>
              <input type="number" placeholder="4.5%"/>

            </div>
            <div className="addLoaneeItem">
              <label>Time</label>
              <input type={"number"} placeholder="2(Year)"/>

            </div>
            <div className="addLoaneeItem">
              <label>Description</label>
              <textarea placeholder="Loan amount ranging from BDT 3 lac to BDT 40 lac"/>

            </div>

          </form>
        </div >

        <button type="submit" className="addLoaneeButton" >Add Loan</button>

      </div>

        </div>
    )
}

export default AddLoanee
