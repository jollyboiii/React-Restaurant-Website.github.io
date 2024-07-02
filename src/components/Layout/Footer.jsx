import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19', color:'white', p:3}}>
      <Box 
        sx={{
          my:3,
          mr:3, 
          "& svg":{ 
            fontSize:'60px',
            cursor:'pointer'
          },
          '& svg:hover':{
            color: 'goldenrod',
            transform: "scale(1.2)",
            transition: "all 350px"
          }
          
          }}
        >
        {/* icons */}
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
      </Box>
      <Typography variant='h5' 
      sx={{
        "@media (max-width:600px":{
          fontSize: '1rem'
        } ,
      }}>
        All Rights Reserved &copy: Jollyboiii
      </Typography>
    </Box>
    </>
  )
}

export default Footer