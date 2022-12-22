import React from 'react';
import Myposts from './Posts/Myposts/Myposts';
import MypostsContainer from './Posts/Myposts/MyPostsContainer';
import ProfileInfo from './Posts/Myposts/ProfileInfo/ProfileInfo';



const Profile = (props) => {
  
    return (
        <div >
        <ProfileInfo isOwner={props.isOwner}
        profile={props.profile} 
        status={props.status} 
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}/>
        <MypostsContainer/>
      </div>
    );

}

export default Profile;