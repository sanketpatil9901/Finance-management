import React, { useEffect, useState } from "react";
import "../../cssFiles/CustomerList.css";
import axios from "axios";
import AdminMenu from '../AdminFiles/AdminMenu';

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
      userstate: "",
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
      loanfirstname:"",
      loanperoid: "", 
      loanenddate: "",
      loaninterest: "",
      loaninterestamt: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/customerlist");
      setLoanDetails(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? (
    <ShowLoading />
  ) : (
    <>
      <AdminMenu />
      <div className="body-container">
        <h1 className="customerlist-title">Loan Details Table</h1>
        <div className="customerlist-table-container">
          <table border="1" className="customerlist-table">
            <thead>
              <tr>
                <th className="customerlist-header">Slno</th>
                <th className="customerlist-header">First Name</th>
                <th className="customerlist-header">Last Name</th>
                <th className="customerlist-header">Address</th>
                <th className="customerlist-header">City</th>
                <th className="customerlist-header">State</th>
                <th className="customerlist-header">Contact</th>
                <th className="customerlist-header">Email</th>
                <th className="customerlist-header">Aadhaar</th>
                <th className="customerlist-header">PAN</th>
                <th className="customerlist-header">Bank Name</th>
                <th className="customerlist-header">Branch Name</th>
                <th className="customerlist-header">Account No</th>
                <th className="customerlist-header">IFSC</th>
                <th className="customerlist-header">Guarantor First Name</th>
                <th className="customerlist-header">Guarantor Last Name</th>
                <th className="customerlist-header">Guarantor Address</th>
                <th className="customerlist-header">Guarantor City</th>
                <th className="customerlist-header">Guarantor State</th>
                <th className="customerlist-header">Guarantor Contact</th>
                <th className="customerlist-header">Guarantor Email</th>
                <th className="customerlist-header">Guarantor Aadhaar</th>
                <th className="customerlist-header">Guarantor PAN</th>
                <th className="customerlist-header">Guarantor Bank Name</th>
                <th className="customerlist-header">Guarantor Branch Name</th>
                <th className="customerlist-header">Guarantor Account No</th>
                <th className="customerlist-header">Guarantor IFSC</th>
                <th className="customerlist-header">Loan Date</th>
                <th className="customerlist-header">Loan Amount</th>
                <th className="customerlist-header">Loan Firstname</th>
                <th className="customerlist-header">Loan Period</th>
                <th className="customerlist-header">Loan End Date</th>
                <th className="customerlist-header">Interest</th>
                <th className="customerlist-header">Interest Amount</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="customerlist-cell">{detail.id}</td>
                  <td className="customerlist-cell">{detail.userfirstname}</td>
                  <td className="customerlist-cell">{detail.userlastname}</td>
                  <td className="customerlist-cell">{detail.useraddress}</td>
                  <td className="customerlist-cell">{detail.usercity}</td>
                  <td className="customerlist-cell">{detail.userstate}</td>
                  <td className="customerlist-cell">{detail.usercontact}</td>
                  <td className="customerlist-cell">{detail.useremail}</td>
                  <td className="customerlist-cell">{detail.useradhaar}</td>
                  <td className="customerlist-cell">{detail.userpan}</td>
                  <td className="customerlist-cell">{detail.userbank}</td>
                  <td className="customerlist-cell">{detail.userbranch}</td>
                  <td className="customerlist-cell">{detail.useraccount}</td>
                  <td className="customerlist-cell">{detail.userifsc}</td>
                  <td className="customerlist-cell">{detail.guarantorfirstname}</td>
                  <td className="customerlist-cell">{detail.guarantorlastname}</td>
                  <td className="customerlist-cell">{detail.guarantoraddress}</td>
                  <td className="customerlist-cell">{detail.guarantorcity}</td>
                  <td className="customerlist-cell">{detail.guarantorstate}</td>
                  <td className="customerlist-cell">{detail.guarantorcontact}</td>
                  <td className="customerlist-cell">{detail.guaranteoremail}</td>
                  <td className="customerlist-cell">{detail.guarantoradhaar}</td>
                  <td className="customerlist-cell">{detail.guarantorpan}</td>
                  <td className="customerlist-cell">{detail.guarantorbank}</td>
                  <td className="customerlist-cell">{detail.guarantorbranch}</td>
                  <td className="customerlist-cell">{detail.guarantoraccount}</td>
                  <td className="customerlist-cell">{detail.guarantorifsc}</td>
                  <td className="customerlist-cell">{detail.loandate}</td>
                  <td className="customerlist-cell">{detail.loanamt}</td>
                  <td className="customerlist-cell">{detail.loanfirstname}</td>
                  <td className="customerlist-cell">{detail.loanperoid}</td>
                  <td className="customerlist-cell">{detail.loanenddate}</td>
                  <td className="customerlist-cell">{detail.loaninterest}</td>
                  <td className="customerlist-cell">{detail.loaninterestamt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
