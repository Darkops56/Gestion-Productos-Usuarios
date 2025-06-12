import { Router } from "express";
import{
    postPost,
    getPosts,
    getPost,
    updatePost,
    deletePost


} from '../controllers/postController.js';
import{
    postUsuario,
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario,
} from '../controllers/usuarioController.js';


const router = Router();

router.post('/productos', postPost);
router.get('/productos', getPosts);
router.get('/productos/:id', getPost);
router.put('/productos/:id', updatePost);
router.delete('/productos/:id', deletePost);

router.post('/usuarios', postUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;