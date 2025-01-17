import React, { useState } from "react";
import {
  Main,
  H1,
  FormGroup,
  FormGroup1,
  P,
  Div1,
  Input,
  Label,
  Button,
} from "../../cssFiles/LoanAmtCreationcss"; // Import styled components
import axios from "axios";
import AdminMenu from "../AdminFiles/AdminMenu";

function LoanAmtCreation(props) {
  const [loanAmtcreate, setLoanAmtcreate] = useState({
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
    guarantorstate: "",
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
    loanfirstname: "",
    loanperoid: "",
    loanenddate: "",
    loaninterest: "",
    loaninterestamt: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanAmtcreate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     return re.test(String(email).toLowerCase()); 
    };

    const isInputEmpty = (value) => {
       return value.trim() === "";
       };

  const registerUser = (useremail) => {
    // 1. Input validation
    for (let key in loanAmtcreate) { 
     if (isInputEmpty(loanAmtcreate[key])) {
       alert(`The field ${key} is required`); 
       return false;
       } }

    if(!validateEmail(useremail))
    {
     alert ("Please add a valid email address")
     return false;
    }
    return true;
  }

    const savedata=(event)=>{
      if(registerUser(loanAmtcreate.useremail))
      {
    try {
    // console.log(registerUser())
    axios.post('http://localhost:5000/api/loancreate',{loanAmtcreate})
    .then(alert("Data saved succesfully"))
    } catch(err) {
       alert("Error in data saving")
    }
  }
  else 
  alert("All fields are required")
  }
  return (
    <>
    <AdminMenu/>
    <Main>
      <FormGroup>
        <form >
        <H1>{props.name} Loan Amount Creation</H1>

        <P>User Information</P>
        <FormGroup1>
          <Div1>
            <Label>First Name</Label>
            <Input
              type="text"
              name="userfirstname"
              value={loanAmtcreate.userfirstname}
              onChange={handleInputChange}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              name="userlastname"
              value={loanAmtcreate.userlastname}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Address</Label>
            <Input
              type="text"
              name="useraddress"
              value={loanAmtcreate.useraddress}
              onChange={handleInputChange}
            />
            <Label>City</Label>
            <Input
              type="text"
              name="usercity"
              value={loanAmtcreate.usercity}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>State</Label>
            <Input
              type="text"
              name="userstate"
              value={loanAmtcreate.userstate}
              onChange={handleInputChange}
            />
            <Label>Contact Number</Label>
            <Input
              type="text"
              name="usercontact"
              value={loanAmtcreate.usercontact}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Email</Label>
            <Input
              type="email"
              name="useremail"
              value={loanAmtcreate.useremail}
              onChange={handleInputChange}
            />
            <Label>Aadhaar Number</Label>
            <Input
              type="text"
              name="useradhaar"
              value={loanAmtcreate.useradhaar}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>PAN Number</Label>
            <Input
              type="text"
              name="userpan"
              value={loanAmtcreate.userpan}
              onChange={handleInputChange}
            />
            <Label>Bank Name</Label>
            <Input
              type="text"
              name="userbank"
              value={loanAmtcreate.userbank}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Branch Name</Label>
            <Input
              type="text"
              name="userbranch"
              value={loanAmtcreate.userbranch}
              onChange={handleInputChange}
            />
            <Label>Account Number</Label>
            <Input
              type="text"
              name="useraccount"
              value={loanAmtcreate.useraccount}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>IFSC Code</Label>
            <Input
              type="text"
              name="userifsc"
              value={loanAmtcreate.userifsc}
              onChange={handleInputChange}
            />
          </Div1>
        </FormGroup1>

        <P>Guarantor Information</P>
        <FormGroup1>
          <Div1>
            <Label>First Name</Label>
            <Input
              type="text"
              name="guarantorfirstname"
              value={loanAmtcreate.guarantorfirstname}
              onChange={handleInputChange}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              name="guarantorlastname"
              value={loanAmtcreate.guarantorlastname}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Address</Label>
            <Input
              type="text"
              name="guarantoraddress"
              value={loanAmtcreate.guarantoraddress}
              onChange={handleInputChange}
            />
            <Label>City</Label>
            <Input
              type="text"
              name="guarantorcity"
              value={loanAmtcreate.guarantorcity}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>State</Label>
            <Input
              type="text"
              name="guarantorstate"
              value={loanAmtcreate.guarantorstate}
              onChange={handleInputChange}
            />
            <Label>Contact Number</Label>
            <Input
              type="text"
              name="guarantorcontact"
              value={loanAmtcreate.guarantorcontact}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Email</Label>
            <Input
              type="email"
              name="guaranteoremail"
              value={loanAmtcreate.guaranteoremail}
              onChange={handleInputChange}
            />
            <Label>Aadhaar Number</Label>
            <Input
              type="text"
              name="guarantoradhaar"
              value={loanAmtcreate.guarantoradhaar}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>PAN Number</Label>
            <Input
              type="text"
              name="guarantorpan"
              value={loanAmtcreate.guarantorpan}
              onChange={handleInputChange}
            />
            <Label>Bank Name</Label>
            <Input
              type="text"
              name="guarantorbank"
              value={loanAmtcreate.guarantorbank}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Branch Name</Label>
            <Input
              type="text"
              name="guarantorbranch"
              value={loanAmtcreate.guarantorbranch}
              onChange={handleInputChange}
            />
            <Label>Account Number</Label>
            <Input
              type="text"
              name="guarantoraccount"
              value={loanAmtcreate.guarantoraccount}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>IFSC Code</Label>
            <Input
              type="text"
              name="guarantorifsc"
              value={loanAmtcreate.guarantorifsc}
              onChange={handleInputChange}
            />
          </Div1>
        </FormGroup1>

        <P>Loan Details</P>
        <FormGroup1>
          <Div1>
            <Label>Loan Date</Label>
            <Input
              type="date"
              name="loandate"
              value={loanAmtcreate.loandate}
              onChange={handleInputChange}
            />
            <Label>Loan Amount</Label>
            <Input
              type="number"
              name="loanamt"
              value={loanAmtcreate.loanamt}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>First Name</Label>
            <Input
              type="text"
              name="loanfirstname"
              value={loanAmtcreate.loanfirstname}
              onChange={handleInputChange}
            />
            <Label>Loan Period</Label>
            <Input
              type="text"
              name="loanperoid"
              value={loanAmtcreate.loanperoid}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Loan End Date</Label>
            <Input
              type="date"
              name="loanenddate"
              value={loanAmtcreate.loanenddate}
              onChange={handleInputChange}
            />
            <Label>Interest Rate (%)</Label>
            <Input
              type="text"
              name="loaninterest"
              value={loanAmtcreate.loaninterest}
              onChange={handleInputChange}
            />
          </Div1>

          <Div1>
            <Label>Interest Amount</Label>
            <Input
              type="text"
              name="loaninterestamt"
              value={loanAmtcreate.loaninterestamt}
              onChange={handleInputChange}
            />
          </Div1>
        </FormGroup1>
        <Button onClick={savedata}>Save</Button>
        </form>
      </FormGroup>
    </Main>
    </>
  );
}


export default LoanAmtCreation;
