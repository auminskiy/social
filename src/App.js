import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import './App.css';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer, { withNavigate, withRouter } from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

class App extends Component{

  componentDidMount() {     
    this.props.initializeApp();
 }

render() {
  if (!this.props.initialized) {
  return <Preloader/>
  }
  return (
    
    <div className='app-wrapper'>
     <HeaderContainer/>
     <Navbar/>
     
     <div className='app-wrapper-content'>
     <Suspense fallback={<div><h2>loading...</h2><Preloader /></div>}>
    <Routes>
    <Route path="/dialogs/*" element={<DialogsContainer />}/>
    
    <Route path="/profile/:userId"  element={<ProfileContainer />} />
    <Route path="/profile/" element={<ProfileContainer/>}/>
    <Route path="/users"  element={<UsersContainer/>}/>
    <Route path="/login"  element={<Login/>}/>
    </Routes> 
    </Suspense>
      </div>
    </div> 
    
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect( mapStateToProps, {initializeApp} )( App );
/*
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp})) (App);*/