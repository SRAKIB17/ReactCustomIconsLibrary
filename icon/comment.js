import React from 'react';

const Comment = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
            
            <svg  width={size} height={size} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}><path d="M7 7h10v2H7zm0 4h7v2H7z"/><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"/></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git
export default Comment;