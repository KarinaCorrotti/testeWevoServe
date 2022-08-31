const express = require('express');
const app = express();
const connectDB = require('./mongoDB/bd');
const path = require("path");
require("dotenv").config();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, 'tmp', 'uploads')));
app.use(express.json())
app.options('*', cors());

require('./routes/users')(app);

connectDB();
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor online!')   
})

module.exports = app;