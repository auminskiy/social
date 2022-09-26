const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'; 


const profileReducer = (state, action) => {

if (action.type === ADD_POST) {
    let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 2,
    }
    state.postsData.push(newPost);
    state.newPostText = '';
   
} else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;

}
return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer