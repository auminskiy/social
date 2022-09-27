import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map (name => <DialogItem key={name.id} id={name.id} name={name.name} />)
    let messagesElements = props.state.messageData.map (message => <MessageItem key={message.id} message={message.message}/>)

    let newMessageElement = React.createRef();
    let postMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText);
    }
   

    return (
        <div className={s.dialogs}>
           
            <div className={s.dialogsItems }>
           { dialogsElements}
            </div>
           
            <div className={s.messagesItems}>
            {messagesElements}
           
            </div>
            <textarea className={s.textarea} ref={newMessageElement}></textarea>
            <button className={s.button} onClick={postMessage}>add message</button>

        </div>
    );
}

export default Dialogs;