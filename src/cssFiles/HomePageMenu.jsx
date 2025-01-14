import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:black;
  padding: 0px 16px;
  padding-top:10px;
  text-align:left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavbarList = styled.ul`
  list-style: none;
  font-weight:bold;
  font-size:1.2rem;
  display: flex;
  width:80%;
  justify-content: space-around;
  
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 50px;
    left: 0;
    text-align: left;
    width: 100%;
    background-color:black;
    display: none;

    &.open {
      display: flex;
    }
  }
`;

export const NavbarItem = styled.li`
  padding:5px;
  margin: 0;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: #f4a261;
    border-radius:10px;
  }
`;

export const HamburgerIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: white;
  display: none;
  align-items:left;

  @media (max-width: 768px) {
    display: block;
  }
`;
