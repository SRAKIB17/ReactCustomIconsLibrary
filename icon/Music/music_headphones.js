import React from 'react';

const MusicHeadphones = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64">
            <g>
                <path d="M53,32h-1v-5c0-0.17-0.229-17-20-17S12,26.83,12,27v5h-1C4.935,32,0,36.935,0,43s4.935,11,11,11h3V36v-4v-5
                    c0-0.612,0.205-15,18-15c17.739,0,17.998,14.389,18,15v5v1v21h3c6.065,0,11-4.935,11-11S59.065,32,53,32z M12,52h-1
                    c-4.963,0-9-4.038-9-9s4.037-9,9-9h1v2V52z M53,52h-1V34h1c4.963,0,9,4.038,9,9S57.963,52,53,52z"/>
            </g>
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default MusicHeadphones;