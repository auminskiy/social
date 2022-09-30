
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


    addPost  ()  {
   
        let newPost = {
            id : 5,
            message: this._state.profilePage.newPostText,
            likesCount: 1,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText  (newText)  {
  
        this._state.profilePage.newPostText=newText;
        this._callSubscriber(this._state);
    },
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            
        let newPost = {
            id : 5,
            message: this._state.profilePage.newPostText,
            likesCount: 1,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        }
    }
    
    
}














export default store;
window.store = store;