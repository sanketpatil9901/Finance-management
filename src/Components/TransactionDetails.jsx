import React, {  useEffect, useState } from "react";
import "../cssFiles/TransactionsDetails.css";
import axios from "axios";
import AdminMenu from "./AdminMenu";

const TransactionDeatails=({userfirstname}) =>{
  const [transitData, setTransitData] = useState({
    userfirstname: "",
    userlastname: "",
    usercontact: "",
    loanamt: "",
    loanperoid: "",
  });

  const [transitData1,setTransitData1] = useState({
    paymentdate: "",
    amount: "",
    balance:""
  })

 useEffect(()=>{
  const fetchdata=async ()=>{
   try {
   const result = await axios.get(`http://localhost:5000/api/getloandetails/${userfirstname}`)
   setTransitData(result.data[0])
   } catch (error) {
    console.log(error)
   }
  }
  fetchdata()
 },[userfirstname])

  const handlechange=(e)=>{
    const { name, value } = e.target;
    setTransitData({
      ...transitData,
      [name]:value
    });
  };

  const handlechange1=(e)=>{
    const { name, value } = e.target;
    setTransitData1({
      ...transitData1,
      [name]:value
    });
  };

  const save= (e)=>{
    try {
    e.preventDefault();
    axios.post('http://localhost:5000/api/transationsdetails',{transitData:transitData,transitData1:transitData1})
   .then(alert('Data saved successfully'))
    }catch(err) {
      console.log("error")
    }
   };
  return (
    <>
    <AdminMenu/>
      <div className="header5">
        <div className="header2">
          <h1 className="h1">Enter Transaction Details</h1>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname"  name="userfirstname" required value={transitData.userfirstname} onChange={handlechange} 
              />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="userlastname" onChange={handlechange}  required value={transitData.userlastname}/>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="contact" id="contact" name="usercontact" onChange={handlechange}  required value={transitData.usercontact}/>
          </div>
          <div className="form-group">
            <label htmlFor="loan_amt">Loan Amount</label>
            <input type="loan_amt" id="loan_amt" name="loanamt" onChange={handlechange}  required value={transitData.loanamt}/>
          </div>
          <div className="form-group">
            <label htmlFor="peroid">Peroid</label>
            <input type="loan_amt" id="peroid" name="loanperoid" onChange={handlechange}  required value={transitData.loanperoid}/>
          </div>
          <div className="form-group">
            <label htmlFor="payement_date">Payement Date</label>
            <input
              type="text"
              id="paymentdate"
              name="paymentdate"
              required
              value={transitData1.paymentdate} 
              onChange={handlechange1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="amount" id="amount" name="amount" value={transitData1.amount} onChange={handlechange1}  required />
          </div>
          <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input type="balance" id="balance" name="balance" value={transitData1.balance} onChange={handlechange1}  required />
          </div>
          <div className="form-group">
            <button className="btn1" id="save" onClick={save}>
              Save
            </button>
            <button className="btn1" id="cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDeatails;
