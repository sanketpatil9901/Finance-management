import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const FormGroup = styled.div`
  background: url("https://extension.harvard.edu/wp-content/uploads/sites/8/2022/07/careers-in-corporate-finance.jpg") no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: large;
  }

  @media (max-width: 480px) {
    font-size: large;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: large;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 5px;
  background: transparent;

  @media (max-width: 768px) {
    padding: 8px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const PasswordToggleIcon = styled.span`
  position: absolute;
  right: 5%;
  top: 50%;
`;