import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/authRedirect';



let mapStateToProps = (state) => { 
    return {
        dialogsPage: state.dialogsPage,
       
    }
}
let mapDispatchToProps = (dispatch) => {
     return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
           
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
     }
    }

    let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (authRedirectComponent);

export default DialogsContainer;