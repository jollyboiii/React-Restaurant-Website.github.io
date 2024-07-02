
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div >
      <Layout>Hello world</Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} /> 
          <Route path='/contact' element={ <Contact />} /> 
          <Route path='/menu' element={ <Menu />} /> 
          <Route path='/about' element={ <About />} /> 
          <Route path='/login' element={ <Login />} /> 
          <Route path='/signup' element={ <Signup />} /> 
          <Route path='*' element={ <PageNotFound />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
