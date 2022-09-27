import { rerenderEntireTree } from './../render';

let state = {
    profilePage:{
    
        postsData : [
            {id:'1', message:'A sickness with no remedy, except the ones inside of me', likesCount: '3'},
            {id:'2', message:'You ever wonder how deep you can sink into nothing at all?', likesCount: '11'},
            {id:'3', message:'Disintegrate', likesCount: '2'},
            {id:'4', message:'Annihilate me', likesCount: '5'},
        ],
        
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
 
}

export let addPost = (postMessage) => {
   
    let newPost = {
        id : 5,
        message:postMessage,
        likesCount: 1,
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;