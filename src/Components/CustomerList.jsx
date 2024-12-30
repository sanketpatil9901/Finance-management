import React, { useState } from "react";
import "../cssFiles/CustomerList.css";

function CustomerList() {
  // Table data as an array of objects
  const [loanDetails] = useState([{
      Slno:"",
      FirstName: "",
      LastName: "",
      Address: "",
      City: "",
      State: "",
      Contact: "",
      Email: "",
      Aadhaar: "",
      pan: "",
      BankName: "",
      BranchName: "",
      accountNo: "",
      IFSC: "",
      GuarantorFirstName:"",
      GuarantorLastName: "",
      GuarantorAddress: "",
      GuarantorCity: "",
      GuarantorState: "K",
      GuarantorContact: "",
      GuarantorEmail: "",
      GuarantorAadhar: "",
      GuarantorPan: "",
      GuarantorBankName: "",
      GuarantorBranchName: "",
      GuarantorAccountNo: "",
      GuarantorIFSC: "",
      LoanDate: "",
      LoanAmount: "",
      Period: "",
      LoanEndDate: "",
      Interest: "",
      InterestAmount: ""
}]);

  return (
    <div className="body">
      <h1>Loan Details Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Src</th>
            <th>FirstName</th>
            <th>LastName</th>
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
            <th>Guarantor FirstName</th>
            <th>Guarantor Last Name</th>
            <th>Guarantor Address</th>
            <th>Guarantor City</th>
            <th>Guarantor State</th>
            <th>Guarantor Contact</th>
            <th>Guarantor Email</th>
            <th>Guarantor Aadhar</th>
            <th>Guarantor Pan</th>
            <th>Guarantor BankName</th>
            <th>Guarantor BranchName</th>
            <th>Guarantor AccountNo</th>
            <th>Guarantor ifsc</th>
            <th>Loan Date</th>
            <th>Loan Amount</th>
            <th>Period</th>
            <th>Loan End Date</th>
            <th>Interest</th>
            <th>Interest Amount</th>
          </tr>
        </thead>
        <tbody>
          {loanDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.Src}</td>
              <td>{detail.FirstName}</td>
              <td>{detail.LastName}</td>
              <td>{detail.Address}</td>
              <td>{detail.City}</td>
              <td>{detail.State}</td>
              <td>{detail.Contact}</td>
              <td>{detail.Email}</td>
              <td>{detail.aadhaar}</td>
              <td>{detail.pan}</td>
              <td>{detail.bankName}</td>
              <td>{detail.branchName}</td>
              <td>{detail.accountNo}</td>
              <td>{detail.ifsc}</td>
              <td>{detail.guarantorFirstName}</td>
              <td>{detail.guarantorLastName}</td>
              <td>{detail.guarantorAddress}</td>
              <td>{detail.guarantorCity}</td>
              <td>{detail.guarantorState}</td>
              <td>{detail.guarantorContact}</td>
              <td>{detail.guarantorEmail}</td>
              <td>{detail.GuarantorAadhar}</td>
              <td>{detail.GuarantorPan}</td>
              <td>{detail.GuarantorBankName}</td>
              <td>{detail.GuarantorBranchName}</td>
              <td>{detail.GuarantorAccountNo}</td>
              <td>{detail.GuarantorIFSC}</td>
              <td>{detail.LoanDate}</td>
              <td>{detail.LoanAmount}</td>
              <td>{detail.Period}</td>
              <td>{detail.LoanEndDate}</td>
              <td>{detail.Interest}</td>
              <td>{detail.InterestAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;