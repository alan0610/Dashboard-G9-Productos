import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.titulo}</td>
                    <td>{props.precio}</td>
                    <td>{props.marca}</td>
                    <td>{props.color}</td>  
                    <td>{props.talle}</td>        
                </tr>
            )
    }       

export default ChartRowProducts;