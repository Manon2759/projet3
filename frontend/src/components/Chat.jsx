import React from 'react';


const Chat = () => {
    return (
        <div className='box'>
            <div className='box__chat'>
                <div className='box__message'>

                </div>

                <div className='box__send'>
                    <input className='box__text' type="text" />
                    <button className='box__heart'>💙</button>
                </div>
            </div>


        </div>
    );
};

export default Chat;