import React from 'react';

const ArrowsCheck = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64" >
            <g>
                <polygon points="13.707,32.293 12.293,33.854 24.293,46 25.707,46 49.707,21.854 48.293,20.366 25,43.623 	" />
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default ArrowsCheck;