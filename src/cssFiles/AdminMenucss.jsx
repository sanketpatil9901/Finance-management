import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #343a40;
  padding: 8px;
 
`;

export const NavbarList = styled.ul`
  list-style: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 0;
  margin-top:2px;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &.open {
    display: flex;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
     z-index:3;
    width: 100%;
    text-align:left;
    background-color: #343a40;
    display: none;
  }
`;

export const NavbarItem = styled.li`
  padding: 5px;
  margin: 0;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: #115293;
  }
`;

export const HamburgerIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
