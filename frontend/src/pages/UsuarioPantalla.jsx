import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsuarioPantalla() {
    const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Gestion/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  
  const eliminarUsuario = (id) => {
    fetch (`http://localhost:3001/Gestion/usuarios/${id}`, {
    method: "DELETE"
    })
    .then (() =>{
    setUsuarios(prev => prev.filter(u => u.id !== id));
    });
  }
  function mostrarOcultarListaUsuarios() {
    const lista = document.getElementById("lista");
    lista.style.display = (lista.style.display === "none" || lista.style.display === "") ? "block" : "none";
  }
    return(
        <div>
        <h1>¿Deseas agregar un usuario?</h1>
        <Link to="/AgregarUsuario">
          <button>Agregar Usuario</button>
        </Link>
        <h2>Lista de Usuarios</h2>
        <button onClick={mostrarOcultarListaUsuarios}>Mostrar/Ocultar Usuarios</button>
        <div id = "lista" style={{ display: "none" }}>
            {usuarios.length > 0 ? (
            <ul>
              {usuarios.map(u => (
                <li key={u._id}>
                  {u.nombre} {u.apellido} {u.email} {" "}
                  <Link to={`/EditarUsuario/${u._id}`}>Editar</Link>{" "}
                  <button onClick={() => eliminarUsuario(u._id)}>Eliminar</button>
                </li>
              ))}
            </ul>) : (
            <p>No hay Usuarios...</p>
          )}
        </div>
      </div>
    )
  }
export default UsuarioPantalla;
