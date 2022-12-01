import { authClientProfile, clientLogin, clientLogout } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
  
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

switch (action.type) {
    case SET_USER_DATA:
 
    return {
        ...state,
        ...action.data,
       
        }
    
    default:
    return state;
}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const authProfile = () => (dispatch) => {
     return   authClientProfile() .then(response => {
            console.log(response.data)
           if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
           }
     
        });
    
}


export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        clientLogin(email, password, rememberMe) .then(response => {
            console.log(response.data)
           if (response.data.resultCode === 0) {
          
            dispatch(authProfile());
           }  else {
            setStatus(response.data.messages) 
        }
     
        });
    
}
}

export const logout = () => {
    return (dispatch) => {
        clientLogout() .then(response => {
            console.log(response.data)
           if (response.data.resultCode === 0) {
          
            dispatch(setAuthUserData(null, null, null, false));
           }
     
        });
    
}
}


export default authReducer;