
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgregarProducto() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState();
  const [vencimiento, setVencimiento] = useState('');
  const navigate = useNavigate();

  const PresionarBoton = async () => {
    if (!nombre || !descripcion || !precio || !vencimiento) return alert("Completa todos los campos");

    await fetch("http://localhost:3001/Gestion/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion, precio, vencimiento}),
    });

    navigate("/Gestion");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Agregar Producto</h2>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <input
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <br />
      <input
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <br/>
      <input
        placeholder="Vencimiento"
        value={vencimiento}
        onChange={(e) => setVencimiento(e.target.value)}
      />
      <br />
      <button onClick={PresionarBoton}>Guardar</button>
    </div>
  );
}

export default AgregarProducto;