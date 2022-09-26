import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div >
        <ProfileInfo/>
        <Myposts postsData={props.state.postsData}/>
      </div>
    );

}

export default Profile;