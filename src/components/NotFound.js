import React from "react";
import imagen from '../assets/images/error404.png';

function NotFound(){
    return(
        <>
            <div className="w-70">
                <img className="w-100% col-auto" src={imagen}  alt="Error 404" />
            </div>
        </>
    )
}
export default NotFound;