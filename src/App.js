//import logo from './logo.svg';
import './App.css';
import ContentHome from './Component/ContentHome';
//import ContentHome from './Component/ContentHome';
//import Explore from './Component/Explore';
import Home from './Component/Home'
import Test from './Modal/Test'

import Messages from './Component/Messages'
import Profile from './Component/Profile';
import Modal from './Modal/CreateModal';
import { Routes ,Route } from 'react-router-dom';
import Explore from './Component/Explore';
import { useContext, useState } from 'react';
import LogIn from './Auth/LogIn'
import SignUp from './Auth/SignUp';
//import { Login } from '@mui/icons-material';
import LogInInstagram from './Auth/SignUp'
import ProtectedAuth from './Routes/ProtectedAuth';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ProtectedHome from './Routes/ProtectedHome';
import NotFound from './Modal/NotFound';
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
});

function App() {

  return (
    <>
    
    <div className="App">

    <Routes>
    
    <Route path='/signup' element= {<ProtectedAuth><SignUp/></ProtectedAuth>}/>
    
    <Route path='/' element= {<ProtectedAuth><LogIn/> </ProtectedAuth>}/>
    <Route path='/' element= {<LogIn/>}/>
    <Route path='*' element={<NotFound/>}/>
   <Route path='/home' element= {<ProtectedHome><Home/></ProtectedHome>}>
         <Route index={true} element= {<ProtectedHome><Home/></ProtectedHome>}/>
         <Route  path="contentHome" element={<ProtectedHome><ContentHome/></ProtectedHome>}/>
         <Route  path="explore" element={<ProtectedHome><Explore/></ProtectedHome>}/>
         <Route  path="massages" element={<ProtectedHome><Messages/></ProtectedHome>}/>
         <Route  path="profile" element={<ProtectedHome><Profile/></ProtectedHome>}/>
   </Route>
  </Routes>

    </div>
  
    </>
  
  );
}

export default App;
