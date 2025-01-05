import React, { useState } from 'react';
import {
  Div,
  Wrapper,
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Buttons,
  Button,
  ImageContainer,
  SideImage,
  GlobalStyle
} from '../cssFiles/UpdateStaff'; 

const UpdateStaff = () => {
  const [staff, setStaff] = useState({
    name: '',
    contact: '',
    email: '',
    startTime: '',
    joiningDate: '',
    salary: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevStaff) => ({
      ...prevStaff,
      [name]: value
    }));
  };



  const handleUpdate = () => {
    // Handle update logic here
    console.log('Updated staff:', staff);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Update canceled');
  };

  return (
      <Div>
        <GlobalStyle/>
    <Wrapper>
      <Container>
        <Title>Update Staff</Title>
        <form>
          {Object.keys(staff).map((key) => (      
              <FormGroup key={key}>
                <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                <Input
                  type="text"
                  name={key}
                  value={staff[key]}
                  onChange={handleChange}
                />
              </FormGroup>
            )
          )}
          <FormGroup>
        
          </FormGroup>
          <Buttons>
            <Button type="button" className="update" onClick={handleUpdate}>Update</Button>
            <Button type="button" className="cancel" onClick={handleCancel}>Cancel</Button>
          </Buttons>
        </form>
      </Container>
      <ImageContainer>
        <SideImage src="https://tse2.mm.bing.net/th?id=OIP.uOcIeyUiwT-dQJKpsUZmswHaE8&pid=Api&P=0&h=180" alt="Side Image" />
      </ImageContainer>
    </Wrapper>
    </Div>
  );
};

export default UpdateStaff;
