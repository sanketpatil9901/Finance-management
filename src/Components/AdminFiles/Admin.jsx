import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import {
  FormGroup,
  Main,
  Title,
  Label,
  Input,
  PasswordToggleIcon,
  SubmitButton,
  GlobalStyle,
  Main1
} from "../../cssFiles/Admincss";
import AdminNavbar from "./AdminNavbar";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:5000/api/signup", { username, password })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       navigate("/adminmenu");
    //     } else {
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 401) {
    //       alert("Wrong user credentials");
    //     } else {
    //       console.error(error);
    //     }
    //   });
    navigate("/adminhome")
  };

  return (
    <>
    <FormGroup>
      <AdminNavbar/>
      <GlobalStyle />
      <Main>
        <Main1>
        <Title>Sign Up</Title>
        <form onSubmit={handlesubmit}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div style={{ position: "relative" }}>
            <Label htmlFor="password">Password:</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PasswordToggleIcon onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </PasswordToggleIcon>
          </div>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
                </Main1>
     </Main>
    </FormGroup>
    </>
  );
}

export default Signin;
