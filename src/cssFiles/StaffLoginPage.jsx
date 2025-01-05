import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const FormWrapper = styled.div`
  width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #333;
`;

export const Label = styled.label`
  display: block;
  margin: 20px 0 10px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

export const SocialButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SocialButtonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.i`
  margin-right: 8px;
`;
