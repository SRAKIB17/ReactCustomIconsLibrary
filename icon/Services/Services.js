import React from 'react';

const Services = ({ color = 'currentColor', size = '1rem', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 24 24" version="1.1" >
            <g fill={color} >
                <g fill='none' stroke={color} strokeWidth='2' transform="translate(-329.000000, -334.000000)">
                    <g transform="translate(329.000000, 334.000000)">
                        <g transform="translate(2.000000, 3.000000)">
                            <path d="M8,12.5 L11,13.5 C11,13.5 18.5,12 19.5,12 C20.5,12 20.5,13 19.5,14 C18.5,15 15,18 12,18 C9,18 7,16.5 5,16.5 C3,16.5 0,16.5 0,16.5" />
                            <path d="M0,10.5 C1,9.5 3,8 5,8 C7,8 11.75,10 12.5,11 C13.25,12 11,13.5 11,13.5" id="路径" />
                            <path d="M6,5 L6,1 C6,0.447715 6.4477,0 7,0 L19,0 C19.5523,0 20,0.447715 20,1 L20,9" id="路径" />
                            <rect height="4.5" width="5" x="10.5" y="0" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Services;