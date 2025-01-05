import React, { useEffect, useState } from "react";
import "../cssFiles/ChooseCustomerName.css";
import axios from "axios";
import TransactionDeatails from "./TransactionDetails";

function ChooseCustomerName() {
  const [selectedOption, setSelectedOption] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [showchild,setShowchild] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/customernames"
        );
        setSelectedOption(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  const handleChange = (event) => { 
    setSelectedValue(event.target.value); 
  };

  const viewhandle=()=>{
     setShowchild(true);
  }

  if (loading) return <h1>Loading..</h1>;

  return showchild ? <TransactionDeatails userfirstname={selectedValue}/> : (
    <div className="container">
      <select value={selectedValue} onChange={handleChange}>
        <option value="Selct an option">Select the name</option>
        {Object.values(selectedOption).map((value, index) => {
          return (
            <option key={index} value={value.userfirstname}>        
              {value.userfirstname}
            </option>
          );
        })}
      </select>
      <button onClick={viewhandle}>view</button>
    </div>
  );
}
export default ChooseCustomerName;
