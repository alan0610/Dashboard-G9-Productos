import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriasInDb from './CategoriasInDb';

function ContentRowCenter(){
    return (
        <div className="row">
 
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Categorias in DB -->*/}
            <CategoriasInDb />
        </div>
    )
}

export default ContentRowCenter;