import express  from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import path from 'node:path';

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
	res.sendFile(path.join(new URL(import.meta.url).pathname, '..', 'public/index.html'));
});

// 404 Handler
app.get('*', (req, res, next) => {
	res.status(404).send({
		error: '404 - Not Found', 
		message: 'No route found for the requested URL'
	});
});

// error handling middleware
app.use((error, req, res, next) => {
	console.error('SERVER ERROR: ', error);
	if(res.status < 400) res.status(500);
	res.send({
		error: error.message, 
		name: error.name,
		table: error.table
	});
})

const { PORT = 8080 } = process.env;
server.listen(PORT, () => {
	console.log(`Server started on PORT: ${PORT}`);
})