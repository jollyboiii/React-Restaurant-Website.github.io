import React, {useState} from 'react';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import  './HeaderStyles.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  // menu drawer
  const drawer = (
  <Box onClick={handleDrawerToggle} sx={{textAlign: 'left'}}>
    <Typography 
      color={'goldenrod'} 
      variant='h6' 
      component="div" 
      sx={{
        flexGrow:1, 
        textAlign:'center', 
        my:'3'}}
      >
      <FoodBankIcon />
        My Resturant
    </Typography>
      <Divider />
    <ul className='mobile-navigation'>
      <li>
      <Button><Link to={'/'}>Home</Link></Button>
      </li>
      <li>
      <Button><Link to={'/menu'}>Menu</Link></Button>
      </li>
      <li>
      <Button><Link to={'/about'}>About</Link> </Button>
      </li>
      <li>
      <Button><Link to={'/contact'}>Contact</Link></Button>
      </li>
      <li>
      <Button><Link to={'/login'}>Login</Link></Button>
      </li>
      <li>
        <Button><Link to={'/signup'}>SignUp</Link></Button>
      </li>
    </ul>
            
  </Box>
)

  return (
    <>
        <Box>
          <AppBar component={'nav'} sx={{bgcolor:'black'}}>
            <Toolbar>
              <IconButton 
              color='inherit' 
              aria-label='open drawer' 
              edge="start" 
              sx={{
                mr:2, 
                display:{sm:'none'}
              }}
              onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1 }}>
              <FoodBankIcon />
                My Restureant
              </Typography>
              <Box sx={{display:{xs:'none', sm:'block'}}}>
                <ul className='navigation-menu'>
                  <li>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/menu'}>Menu</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link> 
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                  <li>
                    <Link to={'/login'}>Login</Link>
                  </li>
                  <li>
                    <Link to={'/signup'}>SignUp</Link>
                  </li>
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
            <Drawer varient="temporary" 
            open={mobileOpen} 
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'}, 
              "& .MuiDrawer-paper":{
                boxSizing: 'border-box',
                width:'240px'
              }
            }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box>
            <Toolbar />
          </Box>
        </Box>
    </>
  )
}

export default Header
