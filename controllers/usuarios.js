import { response } from 'express';

const usuariosGet = (req, res = response) => {

    //const query = req.query;
    // Desestructurando...
    const {a, b = 'Null'} = req.query;

    res.json({
      msg: 'get API - Controlador',
      //query
      a,
      b
    });
  }

  const usuariosPost = (req, res = response) => {

    //const body = req.body;
    const { nombre, fechaNacimiento } = req.body;

    res.json({
      msg: 'post API - Controlador',
      nombre, 
      fechaNacimiento
    });
  }

  const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
      msg: 'put API - Controlador',
      id
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
      msg: 'delete API - Controlador'
    });
  }


export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
};