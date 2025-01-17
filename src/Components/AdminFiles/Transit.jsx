import React, { useEffect, useState } from "react";
import "../../cssFiles/Transit.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UpdateTransactionDetails from "../UpdateTransactionDetails";
import AdminMenu from "../AdminFiles/AdminMenu";

function Transit() {
  // State to hold table data
  const [transactions, setTransactions] = useState([
    {
      id: "",
      userfirstname: "",
      userlastname: "",
      usercontact: "",
      loanamt: "",
      loanperoid: "",
      paymentdate: "",
      amount: "",
      balance: "",
    },
  ]);

  const [showUpdate, setShowUpdate] = useState(false);
  const [userfirstname,setUserfirstname] = useState("")
  const [balance,setBalance] = useState("")

  // State to control the visibility of the UpdateTransactionDetails component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/transit");
      const result = response.data;
      setTransactions(result);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  // Delete Row Functionality
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/transit-delete/${id}`);
    } catch (error) {
      console.log();
    }
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const handleUpdate = (userfirstname,balance) => {
    setUserfirstname(userfirstname);
    setBalance(balance)
    setShowUpdate(true);

  };

  return showUpdate ? (
    <UpdateTransactionDetails userfirstname={userfirstname} balance={balance}/>
  ) : (
    <>
    <AdminMenu/>
    <div className="App">
      <h1 className="transit-h1">Transaction Details</h1>
      <button className="transit-add-btn">
        <Link className="transit-link" to="/transactions">Add Transactions</Link>
      </button>
      <table className="transit-table">
        <thead className="transit-thead">
          <tr className="transit-tr">
            <th>Sr#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Loan Amount</th>
            <th>Period</th>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.userfirstname}</td>
              <td>{transaction.userlastname}</td>
              <td>{transaction.usercontact}</td>
              <td>{transaction.loanamt}</td>
              <td>{transaction.loanperoid}</td>
              <td>{transaction.paymentdate}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.balance}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(transaction.userfirstname,transaction.balance)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Showing 1 to {transactions.length} entries </p>
    </div>
    </>
  );
}

export default Transit;