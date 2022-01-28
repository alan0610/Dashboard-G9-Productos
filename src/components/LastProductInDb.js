import React from 'react';
import { useEffect, useState} from 'react';


function LastProductInDb(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/api/products`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.productos[data.productos.length-1])
            })
            .catch(error => console.error(error))
    }, [])


    return(
        <div className="col-mb-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Creado : {productos.name}</h5>
                </div>
                <div className="card-body">
                    <p>{productos.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
