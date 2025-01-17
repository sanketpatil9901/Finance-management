import React, { useState } from 'react';
import '../../cssFiles/AdminChange.css';
import AdminNavbar from './AdminNavbar';


const PasswordChangeForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle password change logic here
        if (newPassword === confirmPassword) {
            console.log('Password changed successfully.');
        } else {
            console.log('New passwords do not match.');
        }
    };

    return (
      <>
      <AdminNavbar/>
      <div className='div1'>
        <div className="password-form-container">
            <form onSubmit={handleSubmit}>
                <div className="password-form-group">
                    <label htmlFor="current-password">Current Password</label>
                    <input 
                        type="password" 
                        id="current-password" 
                        name="current-password" 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <label htmlFor="new-password">New Password</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        name="new-password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <label htmlFor="confirm-password">Confirm New Password</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <a href="/" className="password-reset-link">Don't know your current password?</a>
                </div>
                <div className="password-form-group">
                    <button type="submit" className="password-change-button">Change Password</button>
                </div>
                <div className="password-form-group">
                    <button type="button" className="password-cancel-button" onClick={() => window.history.back()}>Cancel</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};

export default PasswordChangeForm;
