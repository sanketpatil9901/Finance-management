import React from "react";
import { Navbar, NavbarLink, NavbarList, NavbarItem } from '../cssFiles/AdminMenucss';
// import '../cssFiles/AdminMenucss.css'

function AdminMenu() {
  return (
    <Navbar>
      <NavbarList>
        <NavbarItem><NavbarLink to="/home">Home</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="/staffdetails">Add Staff</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="/loanamount">Account Create</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="/customerlist">View Customer</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="/transit">Transactions</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="#reports">Reports</NavbarLink></NavbarItem>
      </NavbarList>
    </Navbar>
  );
}
export default AdminMenu;