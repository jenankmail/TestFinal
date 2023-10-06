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
import { useContext } from 'react';
import { PrevLink } from './Component/PrevLink';

function App() {
  const prev =useContext(PrevLink);
  
  
  return (
    <>
    
    <div className="App">
     
if(prev.link=="/mmo"){
  <Home/>
}else{
  <Profile/>
}

<Routes>
<Route path='/mmo' element={<Modal/>} /> 

</Routes>
    </div>
   
    </>
  );
}

export default App;
