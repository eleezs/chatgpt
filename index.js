const express = require('express')
const server = express();
const cors = require('cors')
const router = require('./src/router/index')

// let corsOptions = {
//   origin: "http://localhost:3031"
// };

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({extended: true }))

server.use("/api/v1", router);


server.get('/', (req, res) => {
 res.json({message: 'Welcome to chatgpt response converter'})
})

server.use('*', (req, res) => {
	res.status(400).json({message: 'Route not found'})
})

const PORT = 5010;

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
});;