import React from 'react';
import Preloader from '../../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../../../assets/img/userPhoto.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
//import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';



const ProfileInfo = ( props) => {

    let [editMode, setEditMode] = useState(false);
   

    if (!props.profile) {
        return <Preloader/>
    }
const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        props.savePhoto(e.target.files[0]);
    }
}

    return (
        <div>
        <div>
              <img className={s.img} src='https://wallpaperaccess.com/full/4848861.jpg'/>
        </div>
        <div>
        <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateUserStatus={props.updateUserStatus}/>
        {editMode 
        ? <ProfileDataForm isOwner={props.isOwner} profile={props.profile} saveProfile={props.saveProfile} />
        : <ProfileData goToEditMode={() => {setEditMode(true)}}  isOwner={props.isOwner} profile={props.profile} />}
        
        </div>
        </div>
    );
}

const ProfileData = (props) => {
    
    return (
        <div>
             <div>
           <b>Name</b> : {props.profile.fullName}
            </div>
            <div>
           <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yep' : 'no'}
            </div>
            <div> 
                {props.isOwner && <div><button onClick={props.goToEditMode} >edit</button></div>}
                </div>
            <div>
           <b>About me</b> : {props.profile.aboutMe}
            </div>
            <div>
           <b>Contacts</b> : {Object.keys( props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
           })}
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue} </div>
}


export default ProfileInfo;