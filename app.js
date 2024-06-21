/////////// Básico
// import express from 'express';
// import {config} from 'dotenv';

// const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(config({path:'.env'}).parsed.PORT, () => {
//     console.log('Servidor en puerto', config({path:'.env'}).parsed.PORT);
// });

/////////// FIN Básico

import {Server} from './models/server.js';
const server = new Server();

server.listen();