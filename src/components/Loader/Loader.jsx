import React from 'react';
import SvgLoader from '../../media/SvgLoader.svg';

const Loader = () => {
    return (
        <div className="loader">
            <img src={SvgLoader} alt="loader" />
        </div>
    );
};

export default Loader;