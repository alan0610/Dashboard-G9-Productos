import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowApp from './ContentRowApp';
import ChartProducts from './ChartProducts';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tablero: Usuarios & Productos</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowApp />
					<ContentRowCenter />
					<ChartProducts />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;