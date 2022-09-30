import React from 'react';
import Post from './Post/Post';
import s from './Myposts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

const Myposts = (props) => {


    let postsElements = props.postsData.map (message => <Post key={message.id} message={message.message} likesCount={message.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        
        <div className={s.myposts}>
          <h2>my posts</h2>  
           <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <button onClick={addPost}>add</button>
        </div>
        <div className={s.posts}>
        {postsElements}
        </div>
        </div>
       
    );
}

export default Myposts;