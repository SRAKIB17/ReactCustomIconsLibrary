import React from 'react';

const SendShare = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}

            viewBox="0 0 2050 2050" data-name="Layer 3" id="Layer_3" ><path  d="M1530.1,519.9a151.3,151.3,0,0,0-157.4-36.2L601.3,750.5c-40.2,13.9-73.2,39.2-95.6,73.3a191.3,191.3,0,0,0,3.5,212.6c23.6,33.3,57.4,57.6,98,70.1l171.2,52.9a64.1,64.1,0,0,0,64.5-16L980.3,1006a45,45,0,1,1,63.7,63.7L906.6,1207.1a64.1,64.1,0,0,0-16,64.5l52.9,171.2c12.5,40.6,36.8,74.4,70.1,98a188.1,188.1,0,0,0,105.8,34h3.2a188.5,188.5,0,0,0,103.6-30.6c34.1-22.4,59.4-55.4,73.3-95.6l266.8-771.4A151.3,151.3,0,0,0,1530.1,519.9Z" /></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default SendShare;