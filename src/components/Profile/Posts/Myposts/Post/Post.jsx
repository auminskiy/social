import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
      <img className={s.img} src='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSa5-QwCEq6DDEir5c3XqadsVtI3THw0PmpDKi8XuZhIaCb5wPJguUDaiqedGUw9VdC'/>
        {props.message}
      <div>
        <span>likes </span> 
        {props.likesCount}
      </div>
       </div>
    );
}

export default Post;