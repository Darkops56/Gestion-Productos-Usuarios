import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarUsuario() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/Gestion/usuarios/${id}`)
            .then((res) => res.json())
            .then((data) => setUsuario(data));
    }, [id]);
    const PresionarBoton = async () => {
        await fetch(`http://localhost:3001/Gestion/usuarios/${id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                nombre : usuario.nombre || undefined,
                usuario: usuario.usuario || undefined,
                email: usuario.email || undefined,
                contrasena: usuario.contrasena || undefined,
            }),
        });
        
        navigate("/Gestion");
    };

    return(
        <div style={{ padding: "20px" }}>
      <h2>Editar Usuario</h2>
      <input
        placeholder="Nombre"
        value={usuario.nombre}
        onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
      />
      <br />
      <input
        placeholder="Nombre de Usuario"
        value={usuario.usuario}
        onChange={(e) => setUsuario({ ...usuario, usuario: e.target.value })}
      />
      <br />
      <input
        placeholder="Correo Electronico"
        value={usuario.email}
        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
      />
      <br />
      <input
        placeholder="contraseña"
        type = "password"
        value={usuario.contrasena}
        onChange={(e) => setUsuario({ ...usuario, contrasena: e.target.value })}
      />
      <br />
      <button onClick={PresionarBoton}>Guardar Cambios</button>
    </div>
    )
}
export default EditarUsuario;