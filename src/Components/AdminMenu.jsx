import React, { useState } from "react";
import { Navbar, NavbarLink, NavbarList, NavbarItem, HamburgerIcon } from '../cssFiles/AdminMenucss';
// import '../cssFiles/AdminMenucss.css'

function AdminMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar>
        <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
          <p style={{color:"#f4a261",fontSize:"30px",marginTop:"3px",fontWeight:"bold",marginBottom:"5px"}}>P2P</p>
        <NavbarList className={menuOpen ? 'open' : ''}>
          <NavbarItem><NavbarLink to="/home">Home</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="/staffdetails">Add Staff</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="/loanamount">Account Create</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="/customerlist">View Customer</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="/transit">Transactions</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="#reports">Reports</NavbarLink></NavbarItem>
        </NavbarList>
      </Navbar>
    </>
  );
}

export default AdminMenu;
