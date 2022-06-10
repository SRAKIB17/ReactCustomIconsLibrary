import React from 'react';

const MusicMute = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64" >
            <g>
                <path d="M35,64.414V-0.414L15.586,19H3v26h12.586L35,64.414z M5,21h11.414L33,4.414v55.172L16.414,43H5V21z" />
                <polygon points="59.293,22.293 51,30.586 42.707,22.293 41.293,23.707 49.586,32 41.293,40.293 42.707,41.707 51,33.414 
		59.293,41.707 60.707,40.293 52.414,32 60.707,23.707 	"/>
            </g>
        </svg>
    );
};

export default MusicMute;