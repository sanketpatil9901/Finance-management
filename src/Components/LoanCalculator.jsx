import React, { useState } from "react";
import HomePageMenu from './HomePageMenu'
import {Calculator,Title,Input,FormGroup,Label,Button,Results,ResultText,Div} from "../cssFiles/LoanCalculator";

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 ;
    const calculatedPayments = parseFloat(years) ;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const total = monthly * calculatedPayments;
    const interestAmount = total - principal;
    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(interestAmount.toFixed(2));
  };
  return (
    <>
    <HomePageMenu/>
    <Div>
      <Calculator>
        <Title>Loan Calculator</Title>{" "}
        <FormGroup>
          <Label htmlFor="amount">Loan Amount (Rs)</Label>{" "}
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="interest">Interest Rate (%)</Label>{" "}
          <Input
            type="number"
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Enter rate"
          />
        </FormGroup>
        <FormGroup>
          
          <Label htmlFor="years">Loan Term (Years)</Label>{" "}
          <Input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
        </FormGroup>
        <Button onClick={calculateLoan}>Calculate</Button>{" "}
        <Results>
         
          <ResultText>
            Monthly Payment: Rs
            <span id="monthly-payment">{monthlyPayment}</span>
          </ResultText>
          <ResultText>
            Total Payment: Rs<span id="total-payment">{totalPayment}</span>
          </ResultText>
          <ResultText>
            Total Interest: Rs<span id="total-interest">{totalInterest}</span>
          </ResultText>
        </Results>
      </Calculator>
      </Div>
      </>
  );
};

export default LoanCalculator;
