import React from 'react';

const CDN = ({ color = 'currentColor', size = '1rem', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 94 46" >
            <g transform="matrix(1 0 0 1 47.07 22.44)"  >
                <text fontFamily="Fira Code" fontSize="51" fontStyle="normal" fontWeight="800" letterSpacing="0.459" ><tspan x="-46.36" y="19.03" >C</tspan><tspan x="-15.3" y="19.03" >D</tspan><tspan x="15.76" y="19.03" >N</tspan></text>
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default CDN;