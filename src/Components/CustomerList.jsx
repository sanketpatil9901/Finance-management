import React, { useEffect, useState } from "react";
import "../cssFiles/CustomerList.css";
import axios from "axios";

export const ShowLoading = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue", fontSize: "2em" }}>
        Loading
      </h1>
    </>
  );
};

function CustomerList() {
  const [loading, setLoading] = useState(true);
  const [loanDetails, setLoanDetails] = useState([
    {
      Slno: "",
      userfirstname: "",
      userlastname: "",
      useraddress: "",
      usercity: "",
      userstate: "", // Corrected typo
      usercontact: "",
      useremail: "",
      useradhaar: "",
      userpan: "",
      userbank: "",
      userbranch: "",
      useraccount: "",
      userifsc: "",
      guarantorfirstname: "",
      guarantorlastname: "",
      guarantoraddress: "",
      guarantorcity: "",
      guarantorstate: "K",
      guarantorcontact: "",
      guaranteoremail: "",
      guarantoradhaar: "",
      guarantorpan: "",
      guarantorbank: "",
      guarantorbranch: "",
      guarantoraccount: "",
      guarantorifsc: "",
      loandate: "",
      loanamt: "",
      loanperoid: "", // Corrected typo
      loanenddate: "",
      loaninterest: "",
      loaninterestamt: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/customerlist"
      );
      setLoanDetails(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? (  <ShowLoading />) : (
  <div className="body">
      <h1>Loan Details Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Slno</th>
            <th>First Name</th>
            <th>Last Name</th> 
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Aadhaar</th> 
            <th>PAN</th> 
            <th>Bank Name</th>
            <th>Branch Name</th> 
            <th>Account No</th> 
            <th>IFSC</th>
            <th>Guarantor First Name</th> 
            <th>Guarantor Last Name</th>
            <th>Guarantor Address</th> 
            <th>Guarantor City</th>
            <th>Guarantor State</th> 
            <th>Guarantor Contact</th>
            <th>Guarantor Email</th> 
            <th>Guarantor Aadhaar</th>
            <th>Guarantor PAN</th>
            <th>Guarantor Bank Name</th>
            <th>Guarantor Branch Name</th> 
            <th>Guarantor Account No</th>
            <th>Guarantor IFSC</th> 
            <th>Loan Date</th> 
            <th>Loan Amount</th>
            <th>Loan Period</th>
            <th>Loan End Date</th> 
            <th>Interest</th> 
            <th>Interest Amount</th>
          </tr>
        </thead>
        <tbody>
          {loanDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.id}</td>
              <td>{detail.userfirstname}</td>
              <td>{detail.userlastname}</td>
              <td>{detail.useraddress}</td>
              <td>{detail.usercity}</td>
              <td>{detail.userstate}</td>
              <td>{detail.usercontact}</td>
              <td>{detail.useremail}</td>
              <td>{detail.useradhaar}</td>
              <td>{detail.userpan}</td>
              <td>{detail.userbank}</td>
              <td>{detail.userbranch}</td>
              <td>{detail.useraccount}</td>
              <td>{detail.userifsc}</td>
              <td>{detail.guarantorfirstname}</td>
              <td>{detail.guarantorlastname}</td>
              <td>{detail.guarantoraddress}</td>
              <td>{detail.guarantorcity}</td>
              <td>{detail.guarantorstate}</td>
              <td>{detail.guarantorcontact}</td>
              <td>{detail.guaranteoremail}</td>
              <td>{detail.guarantoradhaar}</td>
              <td>{detail.guarantorpan}</td>
              <td>{detail.guarantorbank}</td>
              <td>{detail.guarantorbranch}</td>
              <td>{detail.guarantoraccount}</td>
              <td>{detail.guarantorifsc}</td>
              <td>{detail.loandate}</td>
              <td>{detail.loanamt}</td>
              <td>{detail.loanperoid}</td>
              <td>{detail.loanenddate}</td>
              <td>{detail.loaninterest}</td>
              <td>{detail.loaninterestamt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
