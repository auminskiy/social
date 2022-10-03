import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer"


let store = {

rerenderEntireTree  ()  {
    console.log('state changed')
    
},

_state : {
    sidebar: {},
dialogsPage: {
dialogsData : [
    {id:0, name:'user0'},
    {id:1, name:'user1'},
    {id:2, name:'user2'},
    {id:3, name:'user3'},
    {id:4, name:'user4'},
    {id:5, name:'user5'},
  ],
  
  messageData : [
    {id:0, message:'A sickness with no remedy, except the ones inside of me'},
    {id:1, message:'You ever wonder how deep you can sink into nothing at all?'},
    {id:2, message:'Disintegrate.'},
    {id:3, message:'Annihilate me'},
    {id:4, message:'A sickness with no remedy, except the ones inside of me'},
    {id:5, message:'You ever wonder how deep you can sink into nothing at all?'},
  ],
  newMessageBody: ''
 
},

profilePage : {
   
    
postsData : [
    {id: 0, message: 'Now the oceans have drained out. Can I come up for air?', likesCount : '3' },
    {id: 1, message: "Cause I've been learning to live without And I'm fighting with broken bones", likesCount : '7' },
    {id: 2, message: 'An ocean between us', likesCount : '5' },
  ]
}


},
_callSubscriber() {
    console.log('state changed')
},
getState () {
    return this._state
},


subscribe  (observer)  {
    this._callSubscriber = observer;
},

dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
}
}



export default store;
window.store = store;