import express  from "express";

const app = express();

const { PORT = 8080 } = process.env;
app.listen(PORT, () => {
	console.log(`Server started on PORT: ${PORT}`);
})