import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import Myposts from './Myposts';



let mapStateToProps = (state) => {
return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
}
}

let mapDispatchToProps = (dispatch) => {
return{
    updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text); 
        dispatch(action);
    },
    addPost: () => {
        dispatch(addPostActionCreator());
}
}
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (Myposts)

export default MypostsContainer;
