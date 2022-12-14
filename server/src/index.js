const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet');
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares')
const logs = require('./api/logs')

const server = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/**
 * helmet:
 * Helmet helps you secure your Express apps by setting various HTTP headers. 
 * It's not a silver bullet, but it can help!
 * morgan:
 * HTTP request logger middleware for node.js
 * cors: 
 * only requests from "http://localhost:3000" will be allowed.
 */

server.use(express.json())
server.use(morgan('common'));
server.use(helmet());
server.use(cors({
    origin: process.env.CORS_ORIGIN
}))

server.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

server.use('/api/logs', logs)

server.use(middlewares.notFound)
server.use(middlewares.errorHandler)

const port = process.env.PORT || 1337

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

