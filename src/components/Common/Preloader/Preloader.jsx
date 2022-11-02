import React from 'react';
import loadingGif from './../../../assets/img/loadingGif.svg';

function Preloader(props) {
    return (
        <div>
            <img src={loadingGif}/> 
            </div>
    );
}

export default Preloader;