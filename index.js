require("dotenv").config();
const authRouter = require("./api/auth/router");
const postRouter = require("./api/post/router");
const sessionExplorerRouter = require('./api/session-explorer/router');

//get our db connection
const connectDB = require("./db");
const express = require("express");
//middleware to read cookies
const cookieParser = require('cookie-parser');

//get our express app
const app = express();
//get port from our .env file
const PORT = process.env.PORT || 5000;

// -- MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
// -- MIDDLEWARE

app.get("/", (req, res) => res.send("Hello World!"));

//session explorer endpoints to understand cookies and jwt
app.use('/api', sessionExplorerRouter);

app.use('/api/auth', authRouter);
app.use('/api/post',postRouter);

// -- ROUTES --

//connect to db
connectDB();

//start listening on the designed port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

process.on('unhandledRejection', error => {
    console.error('unhandledRejection', error);
});