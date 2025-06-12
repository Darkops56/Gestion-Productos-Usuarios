import { Usuario } from '../models/post.js'

export const getUsuarios = async (req, res) =>
{
    try {
        const posts = await Usuario.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const postUsuario = async (req, res) => {
    try {
        const cuerpo = req.body;
        const newUsuario = new Usuario(cuerpo);
        const saveUsuario = await newUsuario.save();
        res.status(200).json(saveUsuario);
    } catch (error) {
        res.status(400).send("No se ingresó ningun dato o hubo un error en el json.");
    }
}
export const getUsuario = async (req, res) => {
    const id = req.params.id
    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            res.status(404).send("No se encontró ningun Usuario.");
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const updateUsuario = async (req, res) => {
    const id = req.params.id
    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({mensaje: "No se encontró el usuario."});
        }
        usuario.nombre = req.body.nombre || usuario.nombre;
        usuario.usuario = req.body.usuario || usuario.usuario;
        usuario.email = req.body.email || usuario.email;
        usuario.contrasena = req.body.contrasena || usuario.contrasena;

        const saveUpdate = await usuario.save();
        res.status(200).json(saveUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const deleteUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await Usuario.findByIdAndDelete(id);
        if (!usuario) {
            res.status(404).json({mensaje: "No se encontró el usuario."});
        }
        res.status(200).json({message: "Se eliminó correctamente."});
    } catch (error) {
        res.status(500).send(error);
    }
}