import React, { useState } from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/userPhoto.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followUser, unfollowUser } from '../../api/api';
import { follow, unfollow } from '../../redux/usersReducer';
import Paginator from '../Paginator/Paginator';


let Users = ({currentPage, onPageChanged, pageSize, totalUsersCount, ...props}) => {
return       <div> 
  <Paginator 
  currentPage={currentPage}
  onPageChanged={onPageChanged}
  pageSize={pageSize}
  totalUsersCount={totalUsersCount}
  />   
<div>
                 {props.users.map((u) => (<div key={u.id}>
                 <span>
                  <div>
                      <NavLink to={'/profile/'+u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}></img>
                      </NavLink>
                  </div>
                  <div>
                      {u.followed 
                      ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                        props.unfollow( u.id);
                       }}>unfollow</button> 
                      : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                       props.follow( u.id);
                       

                        }}>follow</button>}
                      
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
}

export default Users;