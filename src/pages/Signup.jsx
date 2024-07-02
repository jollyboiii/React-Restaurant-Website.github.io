import React, { useRef, useState } from 'react'
import users from '../data/userdata';
import Layout from '../components/Layout/Layout';
import loginBG from '../img/loginBG.jpg'
import loginPP from '../img/loginPP.jpeg'
import { TextField, Button ,Box, Grid, CssBaseline, Typography, Paper } from '@mui/material';
import AuthService from '../services/auth.service';
import '../styles/LoginStyles.css'

const [confPassword, setConfPassword] = useState('');

const required = (value) => {
  if (!value) {
    return "This field is required!";
  }
  return "";
};

const validEmail = (value) => {
  if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
    return "This is not a valid email.";
  }
  return "";
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return "The username must be between 3 and 20 characters.";
  }
  return "";
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return "The password must be between 6 and 40 characters.";
  }
  return "";
};

const Signup = () => {

  const form = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");


  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  
  const handleRegister = (e) => {
    e.preventDefault();

    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    setSuccessful(false);

    AuthService.register(username, email, password)
      .then((response) => {
        setSuccessful(true);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        const resMessage = error.response
          ? error.response.data.message
          : error.message || error.toString();

        // Determine which field caused the error and set the appropriate error message
        if (resMessage.includes("username")) {
          setUsernameError(resMessage);
        }
        if (resMessage.includes("email")) {
          setEmailError(resMessage);
        }
        if (resMessage.includes("password")) {
          setPasswordError(resMessage);
        }

        setSuccessful(false);
      });
  };


  return (
    <Layout>
      <CssBaseline />
      <Box className="login" 
      style={{backgroundImage: `url(${loginBG})`}}  
        sx={{
          display:'flex',
          alignItems: "center",
          justifyContent: "center",
          mx:'',
        }}>

        <Grid item xs={'3'} sm={'4'} md={'4'} component={Paper} elevation={6} sx={{ }} square>
          <Box
            sx={{
              
              my: 3,
               mx: -4,
              display: "flex",
              flexDirection: "column",
              justifyContent:'center',
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleRegister} ref={form} sx={{width:'80%'}}>
              
              {!successful && (
                <div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    error={usernameError !== ""}
                    helperText={usernameError}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    error={emailError !== ""}
                    helperText={emailError}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={onChangePassword}
                    error={passwordError !== ""}
                    helperText={passwordError}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 ,color:'white', backgroundColor:'goldenrod' }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </Box>
          </Box>
        </Grid>

        <Grid item style={{backgroundImage: `url(${loginPP})`}}  xs={false} sm={8}  py={'10.6rem'} px={'9rem'} md={8} sx={{ backgroundColor: "#101010" }}>
          <Box className="signup"
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height:"100%",
              width:'100%',
              fontFamily:'',
              fontWeight:'',
              color:'',
              
            }}
          >
            <Typography component="h1" variant="h3" >
              Sign Up
            </Typography>
          </Box>
        </Grid>
      </Box>
    
    </Layout>
  )
}

export default Signup