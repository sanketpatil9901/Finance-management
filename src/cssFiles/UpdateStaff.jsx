import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const Div = styled.div`
  font-family: Arial, sans-serif;
  background: url('https://i.pinimg.com/736x/f4/76/ea/f476eaa362d4a87e74de6a24759792ce.jpg') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* Allow positioning the image absolutely within the body */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  background-color: lightblue(224, 229, 255);
  padding: 20px; /* Reduce padding */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 350px; /* Reduce width if needed */
  height: auto; /* Ensure the height adjusts based on content */
  margin-right: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px; /* Reduce margin */
  color: black;
  font-weight:bold;
  font-size: 20px; /* Reduce font size */
`;

export const FormGroup = styled.div`
  margin-bottom: 10px; /* Reduce margin */
`;

export const Label = styled.label`
  display: block;
  color:black;
  margin-bottom: 5px; /* Reduce margin */
  font-weight: bold;
  text-align:left;
  font-size: 18px; /* Reduce font size */
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px; /* Reduce padding */
  border: 2px solid black;
  font-size: 14px; /* Reduce font size */
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px; /* Reduce margin */
`;

export const Button = styled.button`
  padding: 8px 15px; /* Reduce padding */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px; /* Reduce font size */
  transition: background-color 0.3s ease;

  &.update {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #3c00b3;
    }
  }

  &.cancel {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #4e555b;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 200px;
  right: 100px; /* Position the image container in the top right corner */
`;

export const SideImage = styled.img`
  width: 400px;
  height: 300px; /* Set a specific height */
  border: px solid #ccc;
`;
