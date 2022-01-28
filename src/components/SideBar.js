import React from 'react';
import image from '../assets/images/INDUMENTARIA_1.jpg';
import {Link,Route,Routes} from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import CategoriasInDb from './CategoriasInDb';
import LastProductInDb from './LastProductInDb';
import ChartProducts from './ChartProducts';
import SearchPizzas from './SearchProductos';
import NotFound from './NotFound';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50 h-60" src={image} alt="El Paraiso de la Pizza"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Red</div>

                 {/*<!-- Nav Item - SearchPizzas -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/SearchProductos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="CategoriasInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Última Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ChartProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route  /*exact*/ path='/' element = {<ContentWrapper/>} />
                <Route  path='/CategoriasInDb' element = {<CategoriasInDb/>} />
                <Route  path='/LastProductInDb' element = {<LastProductInDb/>} />
                <Route  path='/ChartProducts' element = {<ChartProducts/>} />
                <Route  path='/SearchProductos' element = {<SearchPizzas/>} />
                <Route  path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default SideBar;