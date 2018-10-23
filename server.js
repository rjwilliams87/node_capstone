'use strict';
const express = require('express');

const app = express();

app.use('/', express.static('/public'));

app.use('/events', express.static('./public/events-home'));

app.use('/event/:id', express.static('./public/event-report'))

app.listen(process.env.PORT || 8080);

module.exports = {app};