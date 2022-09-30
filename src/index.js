import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state, {subscribe} from './redux/state';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
   
    root.render(
       
      <React.StrictMode>
       <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>
    );
    }
  rerenderEntireTree(store.getState());

  store.subscribe(rerenderEntireTree);



    reportWebVitals();
    