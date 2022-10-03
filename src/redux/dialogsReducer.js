const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData : [
        {id:'1', name:'person1'},
        {id:'2', name:'person2'},
        {id:'3', name:'person3'},
        {id:'4', name:'person4'},
      ],
      messageData : [
        {id:'1', message:'message1'},
        {id:'2', message:'message2'},
        {id:'3', message:'message3'},
        {id:'4', message:'message4'},
      ],
      newMessageBody: ''
}

 const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
       
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messageData.push({id:5, message: body});
      
       
    }
    return state;
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;