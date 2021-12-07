import React from 'react'
import './newloanee.css'
import Header from "../../components/Header";


function AddLoanee() {

    return (
        <div>
            <Header/>

      <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>
        <div className="newLoanee">
          <h1 className="addLoaneeTitle">Add Loanee</h1>
          <form className="addLoaneeForm">
            <div className="addLoaneeItem">
              <label>Name</label>
              <input type="text" placeholder="First Name"/>
              <br/>
              <input type="text" placeholder="Last Name"/>


            </div>
            <div className="addLoaneeItem">
              <label>Gender</label>
              <select

                name="active" id="active">
                <option value="Man">Male</option>
                <option value="Woman">Female</option>

              </select>
            </div>

            <div className="addLoaneeItem">
              <label>Loan Amount</label>
              <input type="number" placeholder="2145000"/>


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
              <label>Address</label>
              <input type="text" placeholder="Block B, Basundhara, Dhaka "/>

            </div>
            <div className="addLoaneeItem">
              <label>Contact</label>
              <input type="text" placeholder="01625525869"/>

            </div>
          </form>
        </div >

        <button type="submit" className="addLoaneeButton" >Add Loanee</button>

      </div>

        </div>
    )
}

export default AddLoanee
