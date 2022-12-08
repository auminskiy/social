import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import MypostsContainer from './Posts/Myposts/MyPostsContainer';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';
import ProfilePhoto from './ProfilePhoto';


const Profile = (props) => {
  
    return (
        <div >
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <ProfilePhoto/>
        <MypostsContainer/>
      </div>
    );

}

export default Profile;