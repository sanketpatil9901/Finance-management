import React, { useState, useEffect } from "react";
import {
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from "../cssFiles/UpdateTransactionsDetails";
import axios from "axios";

  const UpdateTransactionDetails = (props) =>{
  // Declare state for form data
  const [formData, setFormData] = useState({
    userfirstname: "",
    userlastname: "",
    usercontact: "",
    loanamt: "",
    loanperoid: "",
    paymentdate:"",
    amount: "",
    balance: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add your form submission logic, e.g., sending the data to a server
    console.log(formData);
  };

  const update = ()=>{
    try {
      axios.post(`http://localhost:5000/api/updatetransaction?param1=${props.userfirstname}&param2=${props.balance}`,{formData})
      .then(response=>{
        alert(response.data)
      })
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/update?param1=${props.userfirstname}&param2=${props.balance}`);
        setFormData(response.data[0])
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    fetchData();
  }, [props.userfirstname]);

  return (
    <FormContainer>
      <Title>Loan Update Form</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name:</Label>
          <Input
            type="text"
            name="userfirstname"
            value={formData.userfirstname}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Last Name:</Label>
          <Input
            type="text"
            name="userlastname"
            value={formData.userlastname}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Contact Number:</Label>
          <Input
            type="text"
            name="usercontact"
            value={formData.usercontact}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Loan Amount:</Label>
          <Input
            type="number"
            name="loanamt"
            value={formData.loanamt}
            onChange={handleInputChange}
            placeholder="Enter the loan amount"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Loan Period:</Label>
          <Input
            type="text"
            name="loanperoid"
            value={formData.loanperoid}
            onChange={handleInputChange}
            placeholder="Enter loan period (months/years)"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Payment Date:</Label>
          <Input
            type="text"
            name="loanenddate"
            value={formData.paymentdate}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Amount Paid:</Label>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter the amount paid"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Remaining Balance:</Label>
          <Input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleInputChange}
            placeholder="Enter remaining balance"
            required
          />
        </FormGroup>

         <Button type="submit" onClick={update}>Update Loan</Button> 
      </form>
    </FormContainer>
  );
}

export default UpdateTransactionDetails;
