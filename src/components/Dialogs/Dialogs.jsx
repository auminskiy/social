import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map (name => <DialogItem key={name.id} id={name.id} name={name.name} />)
    let messagesElements = state.messageData.map (message => <MessageItem key={message.id} message={message.message}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <div className={s.dialogs}>
           
            <div className={s.dialogsItems }>
           { dialogsElements}
            </div>
           
            <div className={s.messagesItems}>
            {messagesElements}
           
            </div>
           <div><textarea value={newMessageBody} onChange={onNewMessageChange} className={s.textarea}  placeholder="ostav' messagu bez napryaga"></textarea></div> 
           <div><button className={s.button} onClick={onSendMessageClick}>add message</button></div> 

        </div>
    );
}

export default Dialogs;