import React from 'react';

const ArrowsRight = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64">
            <g>
                <polygon points="45,31.293 27.854,14.293 26.366,15.707 42.623,32 26.312,48.293 27.863,49.707 45,32.707 	" />
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default ArrowsRight;