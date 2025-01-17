// AvailableLoans.js
import React from "react";
import {
  Container,
  Title,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  StyledLink
} from '../cssFiles/TypeOfLoan';
import AdminMenu from "./AdminFiles/AdminMenu";

function AvailableLoans() {
  return (
    <>
    <AdminMenu/>
    <Container>
      <Title>Available Loans</Title>
      <Row>
        <Col>
          <Card>
            <CardImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05k6f-Mp_fhE5UTj7zPYJ6b7ry6XJwOeR8g&s"
              alt="Personal Loan"
            />
            <CardBody>
              <CardTitle>Personal Loan</CardTitle>
              <CardText>
                Personal loans are suitable for various personal expenses, including medical bills, home renovations, and more.
              </CardText>
              <StyledLink
                to="/loan/personal"
              >
                Apply Now
              </StyledLink>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrluNwVosIZcBh8o2WqfTLfFDM3rDmZUXGjQ&s"
              alt="Vehicle Loan"
            />
            <CardBody>
              <CardTitle>Vehicle Loan</CardTitle>
              <CardText>
                Vehicle loans help you purchase the vehicle of your dreams with flexible repayment optionspay when you want.
              </CardText>
              <StyledLink
                to="/loan/vehicle"
              >
                Apply Now
              </StyledLink>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-cTrs5UtOWw5z4uzrde8_CztkkQm56wldQ&s"
              alt="Education Loan"
            />
            <CardBody>
              <CardTitle>Education Loan</CardTitle>
              <CardText>
                Education loans provide financial support for students to pursue higher education with ease and make your carrer.
              </CardText>
              <StyledLink
                to="/loan/education"
              >
                Apply Now
              </StyledLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default AvailableLoans;
