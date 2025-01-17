import React, { useState } from 'react';
import '../../cssFiles/AdminChange.css';
import AdminNavbar from './AdminNavbar';


const Usernamechange = () => {
    const [currentusername, setcurrentusername] = useState('');
    const [newusername, setnewusername] = useState('');
    const [confirmusername, setconfirmusername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle password change logic here
        if (newusername === confirmusername) {
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
                    <label htmlFor="current-password">Current username</label>
                    <input 
                        type="password" 
                        id="current-password" 
                        name="current-password" 
                        value={currentusername} 
                        onChange={(e) => setcurrentusername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <label htmlFor="new-password">New username</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        name="new-password" 
                        value={newusername} 
                        onChange={(e) => setnewusername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <label htmlFor="confirm-password">Confirm New username</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        value={confirmusername} 
                        onChange={(e) => setconfirmusername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="password-form-group">
                    <a href="/" className="password-reset-link">Don't know your current username?</a>
                </div>
                <div className="password-form-group">
                    <button type="submit" className="password-change-button">Change username</button>
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

export default Usernamechange;
