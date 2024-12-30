import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar Container
export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #6e7dff, #00bfae);
  padding: 15px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-bottom: 2px solid #00bfae;

  @media (max-width: 768px) {
    flex-direction: column;  // Changes layout to column for small screens
  }
`;

// Navbar List
export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px; /* Space between items */
  
  @media (max-width: 768px) {
    flex-direction: column;  // Stack items vertically on small screens
    gap: 15px;  // Reduce gap for vertical layout
  }
`;

// Navbar Item
export const NavbarItem = styled.li`
  text-align: center;
`;

// Navbar Link (styled `Link` component)
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #00bfae;
    color: white;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

