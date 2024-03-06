import express  from "express";

const app = express();

app.get("/", (req, res, next) => {
	res.send("THIS IS HOME")
});

// 404 Handler
app.get('*', (req, res, next) => {
	res.status(404).send({
		error: '404 - Not Found', 
		message: 'No route found for the requested URL'});
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
app.listen(PORT, () => {
	console.log(`Server started on PORT: ${PORT}`);
})