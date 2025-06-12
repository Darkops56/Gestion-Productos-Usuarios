import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgregarUsuario() {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();

    const PresionarBoton = async () =>{
        if (!nombre || !usuario || !email || !contrasena) return alert("Completa todos los campos.");
        await fetch("http://localhost:3001/Gestion/usuarios", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre, usuario, email, contrasena})
        });
        
        navigate("/Gestion");
    };

    return(
        <div style={{ padding: "20px" }}>
      <h2>Agregar Usuario</h2>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <input
        placeholder="Nombre de Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <br />
      <input
        placeholder="Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <input
        placeholder="contrasena"
        type = "password"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <br />
      <button onClick={PresionarBoton}>Crear Usuario</button>
    </div>
    );
}
export default AgregarUsuario;