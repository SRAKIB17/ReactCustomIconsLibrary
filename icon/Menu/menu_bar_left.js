import React from 'react';

const MenuBarLeft = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 24 24" stroke={color}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default MenuBarLeft;