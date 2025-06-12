import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Homes.jsx";
import AgregarUsuario from "./pages/AgregarUsuarios.jsx";
import UsuarioPantalla from "./pages/UsuarioPantalla.jsx";
import EditarUsuario from "./pages/EditarUsuarios.jsx";
import ProductoPantalla from "./pages/ProductoPantalla.jsx";
import AgregarProducto from "./pages/AgregarProductos.jsx";
import EditarProducto from "./pages/EditarProductos.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductoPantalla" element={<ProductoPantalla />} />
        <Route path="/AgregarProducto" element={<AgregarProducto />} />
        <Route path="/EditarProducto/:id" element={<EditarProducto />} />
        <Route path="/UsuarioPantalla" element={<UsuarioPantalla />} />
        <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
        <Route path="/EditarUsuario/:id" element={<EditarUsuario />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;