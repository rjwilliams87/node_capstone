'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');

//set up routers

mongoose.Promise = global.Promise;

const {DATABASE_URL, PORT} = require('./config');

const app = express();

app.use(morgan('common'));

app.use('/', express.static('public'));

app.use('/events', express.static('public/events-home.html'));

app.use('*', (req, res) => {
    return res.status(404).json({message: 'Not found'});
})
let server;

function runServer(databaseUrl, port=PORT){
    return new Promise ((resolve, reject)=>{
        mongoose.connect(databaseUrl, err => {
            if (err){
                reject(err)
            }
            server = app.listen(port, ()=>{
                console.log(`your app is listening on port ${port}`);
                resolve();
            }).on('error', err=>{
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

function closeServer(){
    return mongoose.disconnect().then(()=>{
        return new Promise ((resolve, reject)=>{
            console.log(`closing server`);
            server.close(err=>{
                if (err){
                    reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module){
    runServer(DATABASE_URL).catch(err=> console.error(err));
}

module.exports = {app, runServer, closeServer};