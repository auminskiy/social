
let store = {

    _state: {
        profilePage:{
        
            postsData : [
                {id:'1', message:'A sickness with no remedy, except the ones inside of me', likesCount: '3'},
                {id:'2', message:'You ever wonder how deep you can sink into nothing at all?', likesCount: '11'},
                {id:'3', message:'Disintegrate', likesCount: '2'},
                {id:'4', message:'Annihilate me', likesCount: '5'},
            ],
            newPostText: 'hello',
            
        },
    dialogsPage:{
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
    },
    
    sidebar:{},
     
    },

    getState  ()  {
return this._state
    },

    _callSubscriber  ()  {
        console.log('state changed');
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            
        let newPost = {
            id : 5,
            message: this._state.profilePage.newPostText,
            likesCount: 1,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messageData.push({id: 5, message: body});
        this._callSubscriber(this._state);
        }
    }
    
    
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const addPostActionCreator = () => {
    return {
       type: ADD_POST
    }     
   }
   export const updateNewPostTextActionCreator = (text) => {
       return {
          type: UPDATE_NEW_POST_TEXT,
          newText: text
       }     
      }
 export const sendMessageActionCreator = () => {
        return {
           type: SEND_MESSAGE
        }      
       }
 export const updateNewMessageBodyActionCreator = (body) => {
           return {
              type: UPDATE_NEW_MESSAGE_BODY,
              body: body
           }    
          }



export default store;
window.store = store;