import React,{useState} from "react";
import {
  Navbar,
  NavbarItem,
  NavbarLink,
  NavbarList,
  HamburgerIcon,
} from "../cssFiles/HomePageMenu";

function HomePageMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <Navbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
          <p
            style={{
              color: "#f4a261",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "2px",
            }}
          >
            P2P
          </p>
        </div>
        <NavbarList className={menuOpen ? "navbar-list open" : "navbar-list"}>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/admin">Admin</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/loancalculator">Loan Calculator</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/staff-login">Staff Login</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </Navbar>
    </div>
  );
}

export default HomePageMenu;
