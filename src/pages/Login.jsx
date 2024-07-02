import React, { useRef, useState } from 'react'
import users from '../data/userdata';
import Layout from '../components/Layout/Layout';
import loginBG from '../img/loginBG.jpg'
import {  useNavigate } from 'react-router-dom';
import { TextField, Button ,Box, Grid, CssBaseline, Typography, Paper } from '@mui/material';
import '../styles/LoginStyles.css'

const Login = () => {

    const form = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
      setUsername(e.target.value);
      setUsernameError('');
    };
    
    const onChangePassword = (e) => {
      setPassword(e.target.value);
      setPasswordError('');
    };

    const handleLogin = (e) => {
      e.preventDefault();
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
      // Successful login, redirect to the home page
      navigate('/')
      localStorage.setItem("user", JSON.stringify({id: user.id, ...user}));
      setUsernameError('');
      setPasswordError('');
      // setMessage("")
      } 
      else {      
        
        if (username !== user.username) {
          setUsernameError('Invalid username!');
        }
        if (password !== user.password) {
          setPasswordError('Invalid password!');
        }  
      }
    };
  return (
    
    <Layout >
      <CssBaseline />
      <Box className="login" style={{backgroundImage: `url(${loginBG})`}}  
      sx={{
        display:'flex',
        alignItems: "center",
        justifyContent: "center",  
      }}>
        <Grid item xs={false} sm={8}  py={'11.4rem'} px={'12rem'} md={8} sx={{ backgroundColor: "#101010" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height:"100%",
              width:'100%',
              color:'white',
              
              backgroundColor:'#101010',
              
            }}
          >
            
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={false} sm={'auto'} md={'auto'} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 7,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} ref={form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                error={usernameError}
                helperText={usernameError ? 'Invalid username!' : ''}
                onChange={onChangeUsername}     
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
                error={passwordError}
                helperText={passwordError ? 'Invalid password!' : ''}
                autoComplete="current-password"
                value={password}
                onChange={onChangePassword}
                
              />
              <Button
                type="submit"
                onClick={handleLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2, color:'white',backgroundColor:'goldenrod' }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    
    </Layout>
  )
}

export default Login