'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());

const weatherbitIoData = require('./handlers/weather');
const movieInformation = require('./handlers/movies');

const PORT = process.env.PORT || 3001;

app.get('/weather', weatherbitIoData);
app.get('/movies', movieInformation);

console.log('ooooh data!!!!!');
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

console.log('❤️ hello aloysious. . . welcome to the back-end! ❤️');
