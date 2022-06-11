import React from 'react';

const CommentChat = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg width={size}
            height={size}
            fill={color}
            {...rest}
             viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M27.45,29a2.08,2.08,0,0,1-.9-.21l-5.79-2.9H10a8,8,0,0,1-8-8v-6a8,8,0,0,1,8-8H22a8,8,0,0,1,8,8v6a8,8,0,0,1-1.64,4.85l1,3.73A2,2,0,0,1,27.45,29ZM10,5.89a6,6,0,0,0-6,6v6a6,6,0,0,0,6,6H21a1,1,0,0,1,.45.11l6,3-1.16-4.24a1,1,0,0,1,.22-.92A6,6,0,0,0,28,17.89v-6a6,6,0,0,0-6-6Z" /><path d="M24,19H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z" /><path d="M24,13H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z" /></g></svg>
    );
};

// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default CommentChat;
