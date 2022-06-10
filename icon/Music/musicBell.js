import React from 'react';

const MusicBell = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64" >
            <g>
                <path d="M51,25c0-8.744-5.945-16.107-14-18.31V0H27v6.69C18.945,8.893,13,16.256,13,25v18.586l-7,7V56h16.059
                    c0.5,4.493,4.316,8,8.941,8s8.441-3.507,8.941-8H58v-5.414l-7-7V25z M49,40H15v-4h34V40z M29,2h6v4.261C34.021,6.104,33.023,6,32,6
                    s-2.021,0.104-3,0.261V2z M32,8c9.374,0,17,7.626,17,17v9H15v-9C15,15.626,22.626,8,32,8z M31,62c-3.52,0-6.433-2.613-6.92-6h13.84
                    C37.433,59.387,34.52,62,31,62z M56,51.414V54H8v-2.586l7-7V42h34v2.414L56,51.414z"/>
            </g>
        </svg>
    );
};

export default MusicBell;