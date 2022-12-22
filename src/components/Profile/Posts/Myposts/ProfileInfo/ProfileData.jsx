import React from 'react';


const ProfileData = (props, goToEditMode) => {
    debugger;
    return (
        <div>
             <div>
           <b>Name</b> : {props.profile.fullName}
            </div>
            <div>
           <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yep' : 'no'}
            </div>
            <div> 
                {props.isOwner && <div><button onClick={goToEditMode} >edit</button></div>}
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

export default ProfileData;