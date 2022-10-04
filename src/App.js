import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {

  return (
    
    <div className='app-wrapper'>
     <Header/>
     <Navbar/>
     
     <div className='app-wrapper-content'>
    <Routes>
    <Route path="/dialogs/*" element={<DialogsContainer />}/>
    
    <Route path="/profile"  element={<Profile />}/>
    </Routes> 
      </div>
    </div> 
   
  );
}

export default App;
