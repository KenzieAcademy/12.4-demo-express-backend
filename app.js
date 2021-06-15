require('module-alias/register');

const path = require('path');

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// using @api is possible because of the module-alias library
// you can see the definition in the package.json under '_moduleAliases'
const routes = require('@api');
const fileUpload = require('express-fileupload');

const app = express();

const port = 3000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'images')));

// api
app.get('/', (req, res) => {
  res.send('hello from express');
});

app.get('/file-uploader', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/public'});
});

app.use('/api', routes);
  
// server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
