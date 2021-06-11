const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(logger('dev'));

app.use(require('./routes')); // router

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;