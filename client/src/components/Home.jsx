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
    //TODO: might want to move these into their own file
    socket.on('chat message', onChatMessageEvent);
    
    return () => {
      socket.off('chat message', onChatMessageEvent);
    }
  }, [onChatMessageEvent]);

  const handleClick = () => {
    socket.emit('chat message', `this is a random message ${Math.random()}`);
  }

	// <div className='flex flex-col justify-center items-center'>
	// 	<h1>Hlelo</h1>
	// 	{/* {message && <div>{message}</div>} */}
	// 	{messages.map((message) => <div>{message}</div>)}
	// 	<button onClick={handleClick}>click me</button>
	// </div>

	return (
		<main className='flex flex-col justify-center items-center p-4'>
			<h1 className='text-3xl'>Mach Typer</h1>
			<section>Welcome to Mach-typer</section>
			<section>Come and practice typing in a multiplayer fashion</section>
			<section>Battle your friends and win by typing with the fastest speed</section>
		</main>
	);

}

export default Home;