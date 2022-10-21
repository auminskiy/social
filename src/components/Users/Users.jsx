import React from 'react';
import styles from './Users.module.css'
import { FirebaseApp } from '@firebase/app';
import { initializeApp } from "firebase/app";

import {useCollectionData} from 'react-firebase-hooks/firestore'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';  
import { useState } from 'react';
import { useEffect } from 'react';
import { CollectionReference } from 'firebase/firestore';
import axios from 'axios';
import { getDatabase, ref, child, get, onValue, Database } from "firebase/database";

import StartFirebase from '../../firebase/initFirebase';



  /*  if (props.users.length === 0) {
        axios.get('https://social1app-default-rtdb.europe-west1.firebasedatabase.app/users/2')
        .then(response => {
            props.setUsers(response.data);
            console.log(response.data)
        });
    }
*/

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




return (
       <div>
           { set.map((u) => (<div key={u.id}>
           <span>
            <div>
                
                <img src={u.photoUrl} className={styles.photo}></img>
            </div>
            <div>
                {u.followed 
                ? <button onClick={ () => {props.unfollow(u.id)}}>unfollow</button> 
                : <button onClick={ () => {props.follow(u.id)}}>follow</button>}
                
            </div>
           </span>
           <span>
            <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
           </span>
         
           <span>
         <div>{u.location.city}</div>
            <div>{u.location.country}</div> 
           </span>
           
           </span>
           </div>
           ))}
        </div> 
    );

}
export default Users;