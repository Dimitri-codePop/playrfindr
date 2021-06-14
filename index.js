if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}

const express = require('express');
const apiRouter = require('./app/routers/apiRouter');
const cors = require ('cors');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);

const port = process.env.PORT || `3000`;

let options = {
   swaggerDefinition: {
       info: {
           description: 'Cette api permet de gérer une bibliothèque de jeux',
           title: 'PlayrFindr',
           version: '1.0.0',
       },
       host: 'localhost:3000',
       basePath: '/api',
       produces: [
           "application/json"
       ],
       schemes: ['http', 'https'],
       securityDefinitions: {
       }
   },
   basedir: __dirname, //app absolute path
   files: ['./app/routers/*.js', './app/models/*.js'] //Path to the API handle folder
};
expressSwagger(options);

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
    // response to preflight request
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });

app.use('/api', apiRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});