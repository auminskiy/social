import React from 'react';
import axios from 'axios';

export const getUsersApi = (currentPage = 1, pageSize = 5) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
        withCredentials: true,
      })
      .then(response => {
        return response.data;
      })
};





export const followUsers = (userId) => {
    return   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials:true,
        headers: {
          "API-KEY":"b861e80b-e410-4d86-a858-675ca64b8531"
        }})
        .then(response => {
            return response.data;
          })
    
};


export const unfollowUsers = (userId ) => {
  return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
    withCredentials: true,
  headers: {
    "API-KEY":"b861e80b-e410-4d86-a858-675ca64b8531"
  } })
      .then(response => {
          return response.data;
        })
  
}

export const getProfile = (userId) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

export const authClientProfile = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
})

}

