import React, { useState } from "react";
import "../cssFiles/TransactionsDetails.css";
import axios from "axios";

function TransactionDeatails() {
  const [transitData, setTransitData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    loanAmt: "",
    period: "",
    paymentDate: "",
    amount: "",
    balance:""
  });

  const handlechange=(e)=>{
    const { name, value } = e.target;
    setTransitData({
      ...transitData,
      [name]:value
    });
    console.log(transitData.contact)
  };

  const save= (e)=>{
    try {
    e.preventDefault();
    axios.post('http://localhost:5000/api/transationsdetails',{transitData})
   .then(alert('Data saved successfully'))
    }catch(err) {
      console.log("error")
    }
   };
  return (
    <>
      <div className="header5">
        <div className="header2">
          <h1 className="h1">Enter Transaction Details</h1>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname"  name="firstName" required value={transitData.firstName} onChange={handlechange} 
              />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastName" onChange={handlechange}  required value={transitData.lastName}/>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="contact" id="contact" name="contact" onChange={handlechange}  required value={transitData.contact}/>
          </div>
          <div className="form-group">
            <label htmlFor="loan_amt">Loan Amount</label>
            <input type="loan_amt" id="loan_amt" name="loanAmt" onChange={handlechange}  required value={transitData.loanAmt}/>
          </div>
          <div className="form-group">
            <label htmlFor="peroid">Peroid</label>
            <input type="loan_amt" id="peroid" name="period" onChange={handlechange}  required value={transitData.period}/>
          </div>
          <div className="form-group">
            <label htmlFor="payement_date">Payement Date</label>
            <input
              type="paymentDate"
              id="paymentDate"
              name="paymentDate"
              required
              value={transitData.paymentDate} 
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="amount" id="amount" name="amount" value={transitData.amount} onChange={handlechange}  required />
          </div>
          <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input type="balance" id="balance" name="balance" value={transitData.balance} onChange={handlechange}  required />
          </div>
          <div className="form-group">
            <button className="btn" id="save" onClick={save}>
              Save
            </button>
            <button className="btn" id="cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDeatails;
