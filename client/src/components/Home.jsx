import socket from '../socket';
import { useState, useCallback, useEffect } from 'react';

const Home = () => {
  const [messages, setMessages] = useState([]);

  const onChatMessageEvent = useCallback(
    (msg) => {
      console.log(`The current message: ${msg}`)
      setMessages([...messages, msg]);
    },
    [messages],
  )
  
  useEffect(() => {
    socket.connect();
    //TODO: 
    socket.on('chat message', onChatMessageEvent);
    
    return () => {
      socket.off('chat message', onChatMessageEvent);
    }
  }, [onChatMessageEvent]);

  const handleClick = () => {
    socket.emit('chat message', `this is a random message ${Math.random()}`);
  }
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1>Hlelo</h1>
			{/* {message && <div>{message}</div>} */}
			{messages.map((message) => <div>{message}</div>)}
			<button onClick={handleClick}>click me</button>
		</div>
	);

}

export default Home;