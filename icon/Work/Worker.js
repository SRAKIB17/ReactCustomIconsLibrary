import React from 'react';

const Worker = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 32 32">

            <path  d="M26,8h-5V6c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v2H6c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h20
                c1.1,0,2-0.9,2-2V10C28,8.9,27.1,8,26,8z M13,6h6v2h-6V6z M17,10v6h-2v-6H17z M26,26H6v-3h20V26z M26,21H6V10h7v6c0,1.1,0.9,2,2,2h2
                c1.1,0,2-0.9,2-2v-6h7V21z"/>
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Worker;