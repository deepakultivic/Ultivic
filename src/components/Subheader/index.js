import React from 'react'
import { useLocation } from 'react-router-dom';
function Subheader(props) {
    const location = useLocation();
    return (
        <div>
            <section className={props.clases} >
                <div className="container">
                <h2 className="subhead">
                   {location.pathname.replace("/","")}

                    </h2>
                </div>
                </section>    
        </div>
    )
}

export default Subheader
 