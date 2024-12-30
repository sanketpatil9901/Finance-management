import React, { useEffect, useState } from "react";
import {
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from "../cssFiles/UpdateTransactionsDetails";
import axios from "axios";
function LoanUpdateForm() {
  // Declare state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const [period, setPeriod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add your form submission logic, e.g., sending the data to a server
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/transactiondetails"
        );
       
        const data = response.data[0]; // Assuming you want to set data from the first item in the array
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setContact(data.contact);
        setLoanAmt(data.loanamount);
        setPeriod(data.peroid)
        setPaymentDate(data.paymentdate);
        setAmount(data.amount);
        setBalance(data.balance);
        console.log(response)
        
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    fetchData();
  }, []);

  return (
    <FormContainer>
      <Title>Loan Update Form</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name:</Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Last Name:</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Contact Number:</Label>
          <Input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Loan Amount:</Label>
          <Input
            type="number"
            value={loanAmt}
            onChange={(e) => setLoanAmt(e.target.value)}
            placeholder="Enter the loan amount"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Loan Period:</Label>
          <Input
            type="text"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            placeholder="Enter loan period (months/years)"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Payment Date:</Label>
          <Input
            type="text"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Amount Paid:</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount paid"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Remaining Balance:</Label>
          <Input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Enter remaining balance"
            required
          />
        </FormGroup>

        <Button type="submit">Update Loan</Button>
      </form>
    </FormContainer>
  );
}

export default LoanUpdateForm;
