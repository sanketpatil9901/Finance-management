import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  padding:10px;
  font-size: 2em;
  font-weight:bold;
  color: #333;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Col = styled.div`
  flex: 1 1 30%;
  margin: 10px;

  @media (max-width: 768px) {
    flex: 1 1 45%;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const CardText = styled.p`
  margin-bottom: 10px;
  color: #777;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: #343a40;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: black;
  }
`;
