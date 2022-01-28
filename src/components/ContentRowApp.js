import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState, /*useRef*/ } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Pizzas and Categories in DB --> */

function ContentRowApp() {

    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/api/products`)
            .then(response => response.json())
            .then(data => {
                setProductos(data)
                setCategorias(Object.keys(data.countByCategory.categorias).length)
            })

            .catch(error => console.error(error))
    }, [])


    let productosInDB = {
        title: 'Cantidad de Productos',
        color: 'primary',
        cuantity: productos.count ?? 'no llega'
    }

    let categoriasInDB = {
        title: 'Cantidad Categorías',
        color: 'info',
        cuantity: categorias ?? 'no llega'
    }

    let cartProps = [productosInDB, categoriasInDB];


    return (

        <div className="row">

            {cartProps.map((element, i) => {

                return <SmallCard {...element} key={i} />

            })}

        </div>
    )
}

export default ContentRowApp;