import { Producto } from "../models/post.js";

export const postPost = async (req, res) => {
    try {
        const cuerpo = req.body;
        const newPost = new Producto(cuerpo);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const getPosts = async (req, res) =>{
    try {
        const posts = await Producto.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getPost = async (req, res) =>{
    const id = req.params.id;
    try {
        const post = await Producto.findById(id);
        if (!post) {
            res.status(404).json({mensaje: "No se encontró ningun posteo."});
        }
        res.json(post);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updatePost = async (req, res) =>{
    const id = req.params.id;
    try {
        const post = await Producto.findById(id);
        if (!post) {
            return res.status(404).json({mensaje: "No se encuentra el posteo."});
        }
        post.nombre = req.body.nombre || post.nombre;
        post.descripcion = req.body.descripcion || post.descripcion;
        post.precio = req.body.precio || post.precio;
        post.vencimiento = req.body.vencimiento || post.vencimiento

        const savePost = await post.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deletePost = async (req, res) =>{

    const id = req.params.id;
    try {
        const post = await Producto.findByIdAndDelete(id);
        if (!post) {
            res.status(404).json({mensaje: "No se encuentra el posteo."});
        }
        res.status(200).json({mensaje: "Se eliminó correctamente."})
    } catch (error) {
        res.status(500).send(error);
    }
}
