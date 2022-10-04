import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import MypostsContainer from './Posts/Myposts/MyPostsContainer';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div >
        <ProfileInfo/>
        <MypostsContainer/>
      </div>
    );

}

export default Profile;