import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  background-color:#007bff;
  color:white;
  box-sizing: border-box;
  padding: 30px;
  border-bottom:2px solid black;
  text-align: center;
`;

export const FormGroup = styled.div`
padding: 0px 30px;
  text-align:left;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;

`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
