import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <div  style={{ padding: "20px" }}>
      <div id = "principalesBotones ">
        <h1>¡Bienvenido al Sistema de Gestión de Productos!</h1>
        <Link to="/ProductoPantalla">
          <button>Productos</button>
        </Link>
        <Link to="/UsuarioPantalla">
          <button>Usuarios</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;