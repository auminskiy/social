import { getProfile, getStatus, updateStatus } from "../api/api";
import { toggleIsFetching } from "./usersReducer";


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'; 
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
  
        postsData : [
            {id:'1', message:'A sickness with no remedy, except the ones inside of me', likesCount: '3'},
            {id:'2', message:'You ever wonder how deep you can sink into nothing at all?', likesCount: '11'},
            {id:'3', message:'Disintegrate', likesCount: '2'},
            {id:'4', message:'Annihilate me', likesCount: '5'},
        ],
        newPostText: 'hello',
        profile: null,
        status: '',
        
    
}

const profileReducer = (state = initialState, action) => {

switch(action.type) { 
    case ADD_POST: {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 2,
    }
    return {
        ...state,
        postsData : [...state.postsData, newPost],
        newPostText : '',
    }
     
} case UPDATE_NEW_POST_TEXT: {
    return {
        ...state,
        newPostText : action.newText,
    }

}  case SET_USER_PROFILE: {
    return {
        ...state,
        profile : action.profile,
    }
}

case SET_STATUS: {
    return {
        ...state,
        status : action.status,
    }
}
default:
return state;
}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => { 
        getProfile(userId).then(response=> {
            dispatch(setUserProfile(response.data));
           })
    
}
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(response=> {
            dispatch(setStatus(response.data));
           });
    
}
}

export const updateUserStatus = (status) => (dispatch) => {
        updateStatus(status).then(response=> {
            console.log(response.data.resultCode)
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status)); }
           });
    
}




export default profileReducer