import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {router} from '../routes/usuarios.js';


class Server {
    constructor() {
        this.app = express();
        this.port = config({path:'.env'}).parsed.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo del BODY para POST
        this.app.use(express.json());
        
        // Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto', this.port);
        });
    }
}

export {
    Server
};
