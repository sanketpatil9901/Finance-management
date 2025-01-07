// StyledComponents.js
import styled from "styled-components";

export const Div = styled.div`
  font-family:  sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 40px 20px;
  }
`;

export const Calculator = styled.div`
  background: #fff;
  padding: 25px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
  color: #333;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
  align -items:left;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export const Results = styled.div`
  margin-top: 25px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ResultText = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
  text-align: center;

  span {
    font-weight: bold;
    color: #007bff;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
