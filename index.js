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

const HUBSPOT_TOKEN = process.env.PRIVATE_APP_ACCESS_TOKEN;

//Object API Name
const OBJECT_TYPE = '2-63084340';

//Column API name
const PROPERTY_1 = 'pet_name';           
const PROPERTY_2 = 'color';   
const PROPERTY_3 = 'pet_type';
const PROPERTY_4 = 'sound';

// Column headers 
const COL_1_LABEL = 'Name';
const COL_2_LABEL = 'Color';
const COL_3_LABEL = 'Type';
const COL_4_LABEL = 'Sound';


