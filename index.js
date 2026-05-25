//Load env files and the libraries I need
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

// Configure express for parsing, finding files and use Pug
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');