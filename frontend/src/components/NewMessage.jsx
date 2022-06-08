// import React, { useContext } from 'react';
// import SocketContext from '../context/SocketContext';

// const NewMessage = () => {

//     const { socketClient, input, setInput, messages, setMessages } = useContext(SocketContext)

//     const sendMessage = (event) => {
//         event.preventDefault();
//         if (messages) {
//             socketClient.emit('sendMessage', messages, () => setMessages(''))
//         }
//     }



//     return (

//         <form className="form">
//             <input
//                 className="input"
//                 type="text"
//                 placeholder="Type a message..."
//                 onKeyPress={event => event.key === 'Enter'
//                     ? sendMessage(event) : null}
//             />
//             <button className="sendButton"
//                 onClick={e => sendMessage(e)}>Send</button>
//         </form>










//     );
// };

// export default NewMessage;















