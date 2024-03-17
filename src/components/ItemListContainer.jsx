import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json'
import { fakeApiCall } from "../utils/fakeApiCall";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fakeApiCall(categories).then(res => { setResponse(res); setLoading(false) })

  }, [])

  if (loading) return <h1>Cargando...</h1>


  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

  const productsPorCategoria = getProductosByCategory(id)

  return (<>
    <div className="pl-5">
      <div className="flex justify-center rounded overflow-hidden shadow-lg m-4">
      <h1>Categorias</h1>
      </div>
      <div className="flex justify-around">
        {response.categorias.map((cat) => {
          return <Link key={cat.id} to={`/category/${cat.id}`}>
            <h2>{cat.nombre}</h2>
          </Link>
        })}
      </div>
    </div>

  
    <div className="grid grid-cols-3 gap-3">
        {productsPorCategoria && (
          productsPorCategoria.map((producto) => (
            <div key={producto.id} className="border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
              <img src={producto.imagen} alt={producto.nombre} className="w-20 h-70 mb-4 object-cover" />
              <h3 className="font-semibold text-center">{producto.nombre}</h3>
              <p className="text-center">Precio: ${producto.precio}</p>
              <p className="text-center">{producto.descripcion}</p>
              <ItemCount/>
            </div>
          ))
        )}
      </div>

  </>);
}

export default ItemListContainer;