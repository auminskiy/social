import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import MypostsContainer from './Posts/Myposts/MyPostsContainer';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div >
        <ProfileInfo profile={props.profile}/>
        <MypostsContainer/>
      </div>
    );

}

export default Profile;