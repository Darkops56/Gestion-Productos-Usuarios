import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/Productos/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  const PresionarBoton = async () => {
    await fetch(`http://localhost:3001/Gestion/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: producto.nombre || undefined,
        descripcion: producto.descripcion || undefined,
        precio: producto.precio || undefined,
        vencimiento: producto.vencimiento || undefined,
      }),
    });

    navigate("/Gestion");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Editar Producto</h2>
      <input
        placeholder="Nombre"
        value={producto.nombre}
        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
      />
      <br />
      <input
        placeholder="Descripcion"
        value={producto.descripcion}
        onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
      />
      <br />
      <input
        placeholder="Precio"
        value={producto.precio}
        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
      />
      <br />
      <input
        placeholder="vencimiento"
        value={producto.vencimiento}
        onChange={(e) => setProducto({ ...producto, vencimiento: e.target.value })}
      />
      <br />
      <button onClick={PresionarBoton}>Guardar Cambios</button>
    </div>
  );
}

export default EditarProducto;