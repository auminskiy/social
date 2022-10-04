import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";





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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

    
        this._callSubscriber(this._state);
        
    }
    
    
}






export default store;
window.store = store;