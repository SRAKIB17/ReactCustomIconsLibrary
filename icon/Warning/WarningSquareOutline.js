import React from 'react';

const WarningSquareOutline = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            {...rest}
            
            viewBox="0 0 24 24" >
            <path d="M12 7V13" color={color} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path color={color} d="M12 17.01L12.01 16.9989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path color={color} d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>



    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default WarningSquareOutline;