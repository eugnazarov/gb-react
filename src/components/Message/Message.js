import React from 'react';
import './message.css'

const Message = ({text}) => {
    return (
        <div className='message'>
            <p className="message__text">{text}</p>
        </div>
    );
};

export default Message;
