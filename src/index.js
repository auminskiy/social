import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { addPost, updateNewPostText } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import state, {subscribe} from './redux/store';
import store from './redux/reduxStore';
import  { Provider } from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
   
    root.render(
       
      <React.StrictMode>
       <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
      </React.StrictMode>
    );
    }
  rerenderEntireTree(store.getState());

  store.subscribe(rerenderEntireTree);



    reportWebVitals();
    