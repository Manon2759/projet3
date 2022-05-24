import React from 'react';
<<<<<<< HEAD
=======
import Header from './Header';
import Messages from './Messages';
import NewMessage from './NewMessage';
>>>>>>> 614cf7514661b2f0ee756cb70a386bc492d1dd86


const Chat = () => {
    return (
<<<<<<< HEAD
        <div className='box'>
            <div className='box__chat'>
                <div className='box__message'>

                </div>

                <div className='box__send'>
                    <input className='box__text' type="text" />
                    <button className='box__heart'>💙</button>
                </div>
            </div>


=======
        <div>
            <Header />
            <NewMessage />
            <Messages />
>>>>>>> 614cf7514661b2f0ee756cb70a386bc492d1dd86
        </div>
    );
};

export default Chat;