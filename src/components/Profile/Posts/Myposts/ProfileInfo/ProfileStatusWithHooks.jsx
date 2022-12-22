import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => { if (props.isOwner)
       setEditMode(true);
       
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
   
    return (
        <div>
            
             {!editMode &&
                <div>
                 <b>Status: </b>   <span onClick={activateEditMode}>{props.status || 'none status'} </span>
                </div>
            }
            { editMode &&
                <div>
                    <b>Status: </b>   <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} /> 
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;