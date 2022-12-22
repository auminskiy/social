import React from 'react';
import axios from 'axios';


const instance = axios.create({
  withCredentials: true,
  headers: {"API-KEY":"b861e80b-e410-4d86-a858-675ca64b8531"}
});

export const getUsersApi = (currentPage = 1, pageSize = 5) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
};





export const followUsers = (userId) => {
    return   instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
        .then(response => {
            return response.data;
          })
    
};


export const unfollowUsers = (userId ) => {
  return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then(response => {
          return response.data;
        })
  
}

export const getProfile = (userId) => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

export const authClientProfile = () => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)

}

export const clientLogin = (email, password, rememberMe = false) => {
  return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe})

}

export const clientLogout = () => {
  return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`)

}



export const getStatus = (userId) => {
  return instance.get('https://social-network.samuraijs.com/api/1.0/profile/status/' + userId)
}

export const updateStatus = (status) => {
  return instance.put('https://social-network.samuraijs.com/api/1.0/profile/status',  {status: status})
}

export const uploadPhotos = (photoFile) => {
  const formData = new FormData();
  formData.append('image', photoFile);
  return instance.put('https://social-network.samuraijs.com/api/1.0/profile/photo', formData,  {headers: {'Content-Type':'multipart/form-data'}})
}
 
export const saveProfileForm = (profile) => {
  return instance.put('https://social-network.samuraijs.com/api/1.0/profile', profile)
}
