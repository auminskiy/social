import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import Myposts from './Myposts';



const MypostsContainer = (props) => {

let state = props.store.getState();

    let addPost = () => {
      props.store.dispatch(addPostActionCreator());
        
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text); 
        props.store.dispatch(action);
    }

    return (
        <Myposts updateNewPostText={ onPostChange} 
                 addPost={addPost} 
                 postsData={state.profilePage.postsData} 
                 newPostText={state.profilePage.newPostText}/> 
       
    );
}

export default MypostsContainer;
