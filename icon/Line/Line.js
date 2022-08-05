import React from 'react';

const Line = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 16 16" version="1.1" >
            <path d="M8 0h1v16h-1v-16z"></path>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Line;