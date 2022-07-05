// import packages
require('dotenv').config()

const express = require('express');
const cors = require('cors');

// import routes
const indexRouter = require('./routes/index');

const app = express();

// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(process.env.NODE_ENV === 'dev') {
	const morgan = require('morgan');
	app.use(morgan('dev')); // to log traffic
}

// set routes
app.use('/', indexRouter);

module.exports = app;