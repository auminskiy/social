import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div >
        <ProfileInfo/>
        <Myposts newPostText={props.state.newPostText} postsData={props.state.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      </div>
    );

}

export default Profile;