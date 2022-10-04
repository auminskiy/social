import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsContainer = (props) => {

   

    return (
        <StoreContext.Consumer>
            { (store) => {
                 let state = store.getState().dialogsPage;

                 let onSendMessageClick = () => {
                     store.dispatch(sendMessageActionCreator());
                 }
             
                 let onNewMessageChange = (body) => {
                    
                    store.dispatch(updateNewMessageBodyActionCreator(body));
                 }
             
    return    <Dialogs  updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>
            }
        }
         </StoreContext.Consumer>
    );
}

export default DialogsContainer;