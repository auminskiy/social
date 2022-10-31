import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/img/userPhoto.jpg'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';  
import { useState } from 'react';
import { useEffect } from 'react';




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

  class Users extends React.Component {
  componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            console.log(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
           
        });
    }
// 
onPageChanged = (pageNumber) => {
  this.props.setCurrentPage(pageNumber)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
  .then(response => {
      this.props.setUsers(response.data.items);
      console.log(response.data.items)
  });
}

render() {

  let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
  let pages = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push(i);
  }

return (
  <div>
  <div>
{pages.map(p => {
 return <span className={this.props.currentPage === p ? styles.selectedPage : 0} 
 onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
})}
  </div>
       <div>
           {this.props.users.map((u) => (<div key={u.id}>
           <span>
            <div>
                
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}></img>
            </div>
            <div>
                {u.followed 
                ? <button onClick={ () => {this.props.unfollow(u.id)}}>unfollow</button> 
                : <button onClick={ () => {this.props.follow(u.id)}}>follow</button>}
                
            </div>
           </span>
           <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
           </span>
         
           <span>
         <div>u.location.city</div>
            <div>u.location.country</div> 
           </span>
           
           </span>
           </div>
           ))}
        </div> 
        </div>
    );

                }
              }
export default Users;