import styled from 'styled-components';

export const Main = styled.div`
  background: linear-gradient(135deg, #6e7dff, #00bfae);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: 1em;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const H1 = styled.h1`
  margin: 20px 0;
  padding: 20px;
  text-align: center;
  font-size: 2.5rem;
  color: white;
  background: #6e7dff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;

export const FormGroup = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  width: 90%;
  max-width: 1000px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const FormGroup1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  margin: 15px 0;
  text-align:left;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
  text-align:left;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6e7dff;
    box-shadow: 0 0 8px rgba(110, 125, 255, 0.4);
    outline: none;
  }

  &[type='number'],
  &[type='date'] {
    background: transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 12px 25px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #6e7dff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #00bfae;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
`;
