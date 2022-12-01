import React from 'react';
import Preloader from '../../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
        <div>
              <img className={s.img}src='https://wallpaperaccess.com/full/4848861.jpg'/>
        </div>
        <div>
        <img src={props.profile.photos.large}/>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
        </div>
    );
}

export default ProfileInfo;