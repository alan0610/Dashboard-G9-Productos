import React from 'react';
import { useEffect, useState, useRef } from 'react';

function SearchPizzas(){

const [keyword, setKeyword] = useState('');

const [productos, setProductos] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:3030/api/products`)
		.then(response => response.json())
		.then(data => {	
			setProductos(data.productos.filter(producto => producto.titulo.toLowerCase().includes(keyword.toLowerCase())))
			})
		.catch(error => console.error(error))
	}, [keyword])

	const inputTag = useRef();

	const searchProducto = async e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		inputTag.current.value = '';
	}

	return(
		<div className="container-fluid">
			{
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchProducto}>
								<div className="form-group">
									<label htmlFor="">Buscar Producto:</label>
									<input type="text" className="form-control" ref={inputTag} />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Nombre del producto : {keyword}</h2>
						</div>
						{
							productos.length > 0 && productos.map((producto, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{producto.titulo}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														alt={producto.props.titulo} 
														style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
													/>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ productos.length === 0 && <div className="alert alert-warning text-center">
					No se encontraron productos !!!</div>
					}
				</>
			}
		</div>
	)
}

export default SearchPizzas;
