//import logo from './logo.svg';
import './App.css';
import ContentHome from './Component/ContentHome';
//import ContentHome from './Component/ContentHome';
//import Explore from './Component/Explore';
import Home from './Component/Home'
import Test from './Component/Test'

import Messages from './Component/Messages'
import Profile from './Component/Profile';
import Modal from './Component/Modal';
import { Routes ,Route } from 'react-router-dom';
import Explore from './Component/Explore';
import {PrevLink} from './Component/PrevLink';
import { useContext, useState } from 'react';
import SignUp from './Component/SignUp'
//import { Login } from '@mui/icons-material';
import LogInInstagram from './Component/LogInInstagram'
function App() {
 const prev=useContext(PrevLink);
 let [showModal,setShowModal]=useState(true)
console.log(prev)
  return (
    <>
    
    <div className="App">

<Home/>

    </div>
  
    </>
  );
}

export default App;
