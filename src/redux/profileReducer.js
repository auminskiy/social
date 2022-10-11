

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'; 


let initialState = {
  
        postsData : [
            {id:'1', message:'A sickness with no remedy, except the ones inside of me', likesCount: '3'},
            {id:'2', message:'You ever wonder how deep you can sink into nothing at all?', likesCount: '11'},
            {id:'3', message:'Disintegrate', likesCount: '2'},
            {id:'4', message:'Annihilate me', likesCount: '5'},
        ],
        newPostText: 'hello',
        
    
}

const profileReducer = (state = initialState, action) => {

if (action.type === ADD_POST) {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 2,
    }
    let stateCopy = {
        ...state,
        postsData : [...state.postsData, newPost],
        newPostText : '',
    };
    
    return stateCopy;
} else if (action.type === UPDATE_NEW_POST_TEXT) {
    let stateCopy = {
        ...state,
        newPostText : action.newText,
    };
    
return stateCopy;
}
return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer