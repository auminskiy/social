import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../StoreContext';
import Myposts from './Myposts';



const MypostsContainer = (props) => {

// 

    return (
        <StoreContext.Consumer>
      { (store) => { 
let state = store.getState();

let addPost = () => {
  store.dispatch(addPostActionCreator());
}

let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text); 
    store.dispatch(action);
}

      return <Myposts updateNewPostText={ onPostChange} 
                 addPost={addPost} 
                 postsData={state.profilePage.postsData} 
                 newPostText={state.profilePage.newPostText}/>} }
       </StoreContext.Consumer>
    );
}

export default MypostsContainer;
