import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductoPantalla() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/Gestion/productos")
          .then(res => res.json())
          .then(data => setProductos(data));
      }, []);
    
      const eliminarProductos = (id) => {
        fetch(`http://localhost:3001/Gestion/productos/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          setProductos(prev => prev.filter(p => p.id !== id));
        });
      };

    function mostrarOcultarListaProductos() {
        const lista = document.getElementById("lista");
        lista.style.display = (lista.style.display === "none" || lista.style.display === "") ? "block" : "none";
      }
      return(
        <div id = "mostrarProducto">
        <h1>¿Deseas agregar un producto?</h1>
        <Link to="/AgregarProducto">
          <button>Agregar Producto</button>
        </Link>
        <h2>Lista de Productos</h2>
        <button onClick={mostrarOcultarListaProductos}>Mostrar/Ocultar Productos</button>
        <div  id = "lista" style={{ display: "none" }}>
          {productos.length > 0 ?
          (<ul>
          {productos.map(p => (
            <li key={p._id}>
              {p.nombre} {p.descripcion} {p.precio} {p.vencimiento} {" "}
              <Link to={`/EditarProducto/${p._id}`}>Editar</Link>{" "}
              <button onClick={() => eliminarProductos(p._id)}>Eliminar</button>
            </li>
          ))}
        </ul>) : (
            <p>No hay Productos...</p>
          )
        }
        </div>
      </div>
      )
}
export default ProductoPantalla;