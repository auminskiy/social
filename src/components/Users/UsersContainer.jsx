import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, 
    setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';

import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/img/userPhoto.jpg'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';  
import { useState } from 'react';
import { useEffect } from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';


 

/*
const firebaseConfig = {
    apiKey: "AIzaSyAlUsd47zNyvy0THUueZp4f-bC7J-c-dkU",
    authDomain: "social1app.firebaseapp.com",
    projectId: "social1app",
    storageBucket: "social1app.appspot.com",
    messagingSenderId: "538488379088",
    appId: "1:538488379088:web:ed18457a7045a6d8ccf0d5"
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

let Users = (props) =>  {

        const [users, setUser] = useState([]);
    
        useEffect(() => {
          getUsers()
        }, [])
    
        useEffect(() => {
            console.log(users)
          }, [users])
    
        function getUsers() {
        const usersCollection = collection(db, 'allUsers')
        getDocs(usersCollection)
        .then(response => {
            console.log(response.docs)
            
            const us = response.docs.map(doc => ({
                data: doc.data(),            
                id: doc.id,
             }))
             setUser(us)
        })
        .catch(error => console.log(error.message))
      }
       
      
    const usersData = users.map(el => el.data.persons);
    const set = usersData.flat();
    console.log(set);
 
*/

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(response.data.items);
              console.log(response.data.items)
              this.props.setTotalUsersCount(response.data.totalCount);
             
          });
      }
  // 
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        console.log(response.data.items)
    });
  }
  
  render() {
  
  
  return <> 
  {this.props.isFetching ? 
  <Preloader/> : null}
  <Users 
  totalUsersCount={this.props.totalUsersCount} 
  pageSize={this.props.pageSize}
  currentPage={this.props.currentPage}
  users={this.props.users}
  unfollow={this.props.unfollow}
  follow={this.props.follow}
  onPageChanged={this.onPageChanged}
  />
  </>
                  }
                }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        },
    }

}
*/

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    }

    ) (UsersContainer);