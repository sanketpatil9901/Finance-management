import React, { useState } from "react";
import { Container, FormWrapper, Title, Label, Input, Button, SocialButton, SocialButtonItem, Icon } from "../cssFiles/StaffLoginPage";
import axios from "axios";

const StaffLoginPage = () => {

  const [staff,setStaff] = useState({
    staffname:"",
    staffpassword:""
  })

  const handlechange = (e)=>{
    const { name, value } = e.target;
    setStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const submit = () =>{
   
       axios.post('http://localhost:5000/api/stafflogin',{staff})
      .then(response=>{
        if(response.status===200)
          alert(response.data.login)
      })
    . catch (error=> {
      if (error.response && error.response.status === 401) {
        alert("Wrong user credentials");
      } else {
        console.error(error);
      }
    })
  }

  return (
    <>
      <Container>
        <FormWrapper>
          <Title>Staff Login</Title> <Label htmlFor="username">Username</Label>
          <Input type="text" placeholder="Email or Phone" name="staffname" id="username" value={staff.staffname} onChange={handlechange}/>
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Password" name="staffpassword" id="password" value={staff.staffpassword} onChange={handlechange}/>
          <Button onClick={submit}>Log In</Button>
          <SocialButton>
            <SocialButtonItem>
              <Icon className="fab fa-google" /> Google
            </SocialButtonItem>
            <SocialButtonItem>
              <Icon className="fab fa-facebook" /> Facebook
            </SocialButtonItem>
          </SocialButton>
        </FormWrapper>
      </Container>
    </>
  );
};

export default StaffLoginPage;
