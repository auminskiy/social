import React from 'react';
import Post from './Post/Post';
import s from './Myposts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

const Myposts = (props) => {


    let postsElements = props.postsData.map (message => <Post key={message.id} message={message.message} likesCount={message.likesCount} />)


    return (
        
        <div className={s.myposts}>
          <h2>my posts</h2>  
           <div>
        <textarea></textarea>
        <button >add</button>
        </div>
        <div className={s.posts}>
        {postsElements}
        </div>
        </div>
       
    );
}

export default Myposts;