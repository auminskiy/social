import React from 'react';
import Preloader from '../../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

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
        </div>
        </div>
    );
}

export default ProfileInfo;