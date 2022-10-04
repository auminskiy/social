import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
       
       props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}/>
    );
}

export default DialogsContainer;