

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS= 'SET_USERS';

let initialState = {
  
        usersData :  [
            {id:'1', followed: false, fullName:'Shohei Ohtani', photoUrl:'https://static01.nyt.com/images/2021/06/30/sports/29mlb-ohtani-print/29mlb-ohtani-print-mediumSquareAt3X-v3.jpg', status: 'center fielder', location: {city:'Oshu', country:'Japan'}},
            {id:'2', followed: true, fullName:'Josh Donaldson', photoUrl:'https://calltothepen.com/files/2014/05/josh-donaldson-mlb-oakland-athletics-los-angeles-angels.jpg', status: 'Third Baseman', location: {city:'Pensacola', country:'FL'}},
            {id:'3', followed: false, fullName:'Edwin Encarnación', photoUrl:'https://www.cp24.com/polopoly_fs/1.6100695.1665161354!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg', status: 'first baseman', location: {city:'La Romana', country:'Dominican Republic'}},
            {id:'4', followed: true, fullName:'José Bautista', photoUrl:'https://api.time.com/wp-content/uploads/2015/10/gettyimages-492684094.jpg', status: 'Rightfielder and Third Baseman', location: {city:'Santo Domingo', country:'Dominican Republic'}},
        ] ,
        
        
    
}

const usersReducer = (state = initialState, action) => {

switch (action.type) {
    case FOLLOW:
 
    return {
        ...state,
       // usersData : [...state.usersData],
       usersData: state.usersData.map(u => {
        if (u.id === action.userId) {
            return {...u, followed: true}
        }
        return u
    })
    }
    case UNFOLLOW:
        
    return {
        ...state,
       // usersData : [...state.usersData],
       usersData: state.usersData.map(u => {
        if (u.id === action.userId) {
            return {...u, followed: false}
        }
        return u
    })
    }
    case SET_USERS: {
        return {...state, usersData: [...state.usersData, ...action.usersData]}
    }
    default:
    return state;
}
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer