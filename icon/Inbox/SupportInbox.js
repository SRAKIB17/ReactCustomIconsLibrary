import React from 'react';

const SupportInbox = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 24 24" >
            <path d="M12 0C5.37262 0 0 5.37262 0 12C0 18.6274 5.37262 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37262 18.6274 0 12 0ZM15 1.94475C18.3802 2.95237 21.0386 5.61975 22.0477 8.99998H17.1829C16.6566 8.09608 15.9043 7.34451 15 6.81898V1.94475ZM16.4914 12.0049C16.4914 14.4878 14.4806 16.5004 12 16.5004C9.5194 16.5004 7.50865 14.4878 7.50865 12.0049C7.50865 9.522 9.51977 7.50902 12 7.50902C14.4803 7.50902 16.4914 9.52202 16.4914 12.0049ZM10.5 1.6155C10.9901 1.54537 11.4904 1.50713 12 1.50713C12.5092 1.50713 13.0099 1.54537 13.5 1.6155V6.20475C13.02 6.08063 12.519 6.00787 12 6.00787C11.481 6.00787 10.9804 6.08063 10.5 6.20475V1.6155ZM9.00002 1.94475V6.819C8.09627 7.34363 7.34252 8.09737 6.81715 9H1.95227C2.96102 5.61975 5.61977 2.9524 9.00002 1.94475ZM1.50715 12.0037C1.50715 11.4922 1.55062 10.992 1.62152 10.5H6.20102C6.07652 10.9807 6.0079 11.4839 6.0079 12.0041C6.0079 12.5212 6.07615 13.0219 6.19915 13.5H1.6204C1.55067 13.0106 1.50715 12.5122 1.50715 12.0037ZM9 22.0623C5.61713 21.0543 2.95765 18.3832 1.95002 15H6.81265C7.3384 15.906 8.09362 16.6627 9 17.1889V22.0623ZM13.5 22.3916C13.0099 22.4617 12.5092 22.4999 12 22.4999C11.4904 22.4999 10.9901 22.4613 10.5 22.3916V17.8031C10.9804 17.9272 11.481 17.9999 12 17.9999C12.519 17.9999 13.02 17.9272 13.5 17.8031V22.3916ZM15 22.0623V17.1888C15.906 16.6627 16.6617 15.906 17.187 15H22.0497C21.042 18.3828 18.3825 21.0543 15 22.0623ZM17.8009 13.5C17.9239 13.0218 17.9921 12.5212 17.9921 12.0041C17.9921 11.4839 17.9235 10.9807 17.7986 10.4999H22.3785C22.449 10.9919 22.4929 11.4922 22.4929 12.0037C22.4929 12.5122 22.4498 13.011 22.3796 13.5H17.8009Z"  />
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default SupportInbox;