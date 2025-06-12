import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    vencimiento: Date,
    hidden: Boolean,
});

const UsuarioSchema = new Schema({
    nombre: String,
    usuario: String,
    email: String,
    contrasena: String,
    fechaCreacion:{type: Date, default: Date.now}
});

export const Producto = mongoose.model('Productos', ProductoSchema);
export const Usuario = mongoose.model('Usuario', UsuarioSchema);