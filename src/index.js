import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { addPost, subscribe } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';


 
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      
      <React.StrictMode>
       
        <App state={state} />
        
      </React.StrictMode>
     
    );
    

   

    reportWebVitals();
