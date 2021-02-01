 const express = require('express');
 const cors = require('cors');
 const routes = require('./routes');

 const app = express();
 
 app.use(cors());
 /* FUNÇÃO CONVERTE O JSON EM OBJETO JS */
 app.use(express.json());
 app.use(routes);

 app.listen(3333);