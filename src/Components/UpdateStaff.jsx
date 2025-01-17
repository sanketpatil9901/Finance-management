import React, { useEffect, useState, useContext } from 'react';
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
import axios from 'axios';
import { UserDataContext } from './AuthContext';

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

  const staff1 = useContext(UserDataContext)
 

  useEffect(()=>{
    
    const fetchdata = async () => {
      const result = await axios.post('http://localhost:5000/api/staffupdatedetails',[ staff1.user.staffname,staff1.user.staffpassword ])
      setStaff(result.data)
    }
    fetchdata();
  },[staff1])



  const handleUpdate = (e) => {
    e.preventDefault();
    try {
         axios.post('http://localhost:5000/api/staffdetails',{staff})
         alert("Data saved successfully")
    } catch (error) {
      console.log(error)
    }
  };

  const handleCancel = () => {
     window.history.back();
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
