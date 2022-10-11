import React from 'react';
import styles from './Users.module.css'

let Users = (props) =>  {

    return (
        <div>
           {props.usersData.map(u => <div key={u.id}>
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
           )}
        </div>
    );
}

export default Users;