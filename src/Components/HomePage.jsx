import React, { useState } from "react";
import "../cssFiles/HomePage.css";
import HomePageMenu from "./HomePageMenu";
// import loanImage from "./assets/image.png"; // Replace with your actual image path
// import quickLoanIcon from './assets/loan-image.jpg'; // Replace with your actual icon path

const HomePage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [returnAmount, setReturnAmount] = useState("");

  const handleAmountChange = (event) => {
    setLoanAmount(event.target.value);
    // Perform calculations for return amount based on loanAmount and loanDuration
    calculateReturnAmount(event.target.value, loanDuration);
  };

  const handleDurationChange = (event) => {
    setLoanDuration(event.target.value);
    // Perform calculations for return amount based on loanAmount and loanDuration
    calculateReturnAmount(loanAmount, event.target.value);
  };

  const calculateReturnAmount = (amount, duration) => {
    if (amount && duration) {
      // This is a placeholder calculation. Replace with your actual logic.
      const interestRate = 0.05; // Example 5% interest
      const calculatedReturn =
        parseFloat(amount) * (1 + interestRate * parseInt(duration));
      setReturnAmount(calculatedReturn.toFixed(2)); // Round to 2 decimal places
    } else {
      setReturnAmount("");
    }
  };

  

  const handleApplyClick = () => {
    // Handle loan application logic here (e.g., API call)
    console.log("Applying for loan:", {
      loanAmount,
      loanDuration,
      returnAmount,
    });
    if (!loanAmount || !loanDuration) {
      alert("Please select loan amount and duration!");
    } else {
      alert("Loan applied successfully!");
    }
  };

  return (
    <div>
      <div className="sectioncombine">
        <HomePageMenu/>
        <section className="hero-section">
          <div className="hero-content">
            <h1 style={{ color: "white", WebkitTextStroke: "1px black" }}>
              {" "}
              PATH TO PROFITABILITY
            </h1>
            <p>
              <b>Achieve your financial goals</b>
            </p>
          </div>
          <div className="hero-image"></div>
        </section>

        <section className="features-section">
          <div className="feature" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Ep5FE_5sp4Q5zIveqrQkxwHaHa&pid=Api&P=0&h=180"
              alt="Quick Loan"
            />
            <p>Quick & Easy Loan Approvals</p>
          </div>
          <div className="feature" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.NEDoYBvO2kqxWGncRhON3AHaFL&pid=Api&P=0&h=180"
              alt="Quick Loan"
            />
            <p>Quick & Easy Loan Approvals</p>
          </div>
          <div className="feature" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.aLgqjbPCZDZJ8NOwiENjpgHaH0&pid=Api&P=0&h=180"
              alt="Quick Loan"
            />
            <p>Quick & Easy Loan Approvals</p>
          </div>
        </section>
      </div>
      <div className="App">
        {/* <h1>High Performance Services</h1> */}
        <marquee
          className="Home_marquee"
          behavior=""
          direction="left"
          scrollamount="9"
        >
          <h1>HIGH PERFORMANCE SERVICES</h1>
        </marquee>
        <h2 style={{ textShadow: "2px 2px 3px red" }}>FOR ALL INDUSTRIES.</h2>

        <div className="services">
          <div className="service" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.cTUPlEeQaFkVezUx9yiXPwHaHa&pid=Api&P=0&h=180"
              alt="Business Loan"
            />
            <h3>Business Loan</h3>
          </div>
          <div className="service" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.8HDZgZga43RHxokZ9XiX3wE2DJ&pid=Api&P=0&h=180"
              alt="Commercial Loan"
            />
            <h3>Commercial Loans</h3>
          </div>
          <div className="service" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.JLbQGt4uMTXEZwQmJHdywQHaHa&pid=Api&P=0&h=180"
              alt="Construction Loan"
            />
            <h3>Construction Loans</h3>
          </div>
          <div className="service" style={{ boxShadow: "2px 5px 7px" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.1YGi-ytzVuOGWpsZyuE3RQHaG5&pid=Api&P=0&h=180"
              alt="Activate Windows"
            />
            <h3>Activate Windows</h3>
          </div>
        </div>
        <div className="loan-application-container">
          <h1>Apply in Three Easy Steps</h1>
          <h2>Easy Application Process For Any Types of Loan</h2>
          <div className="loan-form">
            <select value={loanAmount} onChange={handleAmountChange}>
              <option value="">Select Amount</option>
              <option value="1000">₹1,000</option>
              <option value="5000">₹5,000</option>
              <option value="10000">₹10,000</option>
            </select>
            <select value={loanDuration} onChange={handleDurationChange}>
              <option value="">Duration (Months)</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
            <input
              type="text"
              value={returnAmount}
              placeholder="Return Amount"
              readOnly
            />
            <button onClick={handleApplyClick}>APPLY FOR LOAN</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Stay Connected</h2>{" "}
          <p className="footer-text">
            Follow us on social media and stay updated with the latest news and
            offers.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" className="social-link">
              Facebook
            </a>
            <a href="https://twitter.com" className="social-link">
              Twitter
            </a>
            <a href="https://instagram.com" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
