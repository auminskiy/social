import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/userPhoto.jpg';

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <div>
        <div>
      {pages.map(p => {
       return <span className={props.currentPage === p ? styles.selectedPage : 0} 
       onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
      })}
        </div>
             <div>
                 {props.users.map((u) => (<div key={u.id}>
                 <span>
                  <div>
                      
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}></img>
                  </div>
                  <div>
                      {u.followed 
                      ? <button onClick={ () => {props.unfollow(u.id)}}>unfollow</button> 
                      : <button onClick={ () => {props.follow(u.id)}}>follow</button>}
                      
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

export default Users;