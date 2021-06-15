require('module-alias/register');

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// using @api is possible because of the module-alias library
// you can see the definition in the package.json under '_moduleAliases'
const routes = require('@api');

const app = express();

const port = 3000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());

// api
app.get('/', (req, res) => {
  res.send('hello from express');
});

app.use('/api', routes);
  
// server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
