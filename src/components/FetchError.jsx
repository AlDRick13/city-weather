import React from 'react';

const FetchError = () => {
    return (
        <div className="video">
            <video preload="true" autoPlay muted loop playsinline id="myVideo">
                <source src="https://freefrontend.com/assets/img/html-css-404-page-templates/neon-404-page-not-found.mp4" type="video/mp4"/>
            </video>

        </div>
    );
};

export default FetchError;

