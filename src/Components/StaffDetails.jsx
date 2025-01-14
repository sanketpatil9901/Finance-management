import React, { useState } from 'react';
import '../cssFiles/StaffDetails.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminMenu from './AdminMenu';

const StaffDetailsForm = () => {
  const [formData, setFormData] = useState({
    staffName: '',
    contact: '',
    email: '',
    startTime: '',
    dateOfJoining: '',
    salary: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
         axios.post('http://localhost:5000/api/staffdetails',{formData})
         alert("Data saved successfully")
    } catch (error) {
      console.log(error)
    }
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setFormData({
      staffName: '',
      contact: '',
      email: '',
      startTime: '',
      dateOfJoining: '',
      salary: '',
      username: '',
      password: ''
    });
    navigate(-1);
  };

  return (
    <>
    <AdminMenu/>
    <div className='bodyback'>
    <form onSubmit={handleSubmit} className="staff-form">
      <h2>Staff Details</h2>
      <div className="form-group">
        <label>Staff Name</label>
        <input
          type="text"
          name="staffName"
          value={formData.staffName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Start Time</label>
        <input
          type="text"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date of Joining</label>
        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button">Save</button>
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default StaffDetailsForm;
