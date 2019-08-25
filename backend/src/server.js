const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://homesimpsom:homesimpsom@cluster0-pp5yf.mongodb.net/homesimpsom?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
