import React from 'react';
import { Nav } from '../cssFiles/Admincss';
import { NavLink } from 'react-router-dom';
import '../cssFiles/AdminNavbar.css';

function AdminNavbar() {
  return (
    <div>
      <Nav>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top text-white">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white mx-4" to="#">Admin</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-4">
                <li className="nav-item mx-3">
                  <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/admin">Sign Up</NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link text-white" activeClassName="active" to="/admin/updateusername">Change Username</NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link text-white" activeClassName="active" to="/admin/updatepassword">Change Password</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Nav>
    </div>
  );
}

export default AdminNavbar;
