import React from 'react'
import { useLocation } from 'react-router-dom';
function Subheader(props) {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <section className={props.clases} >
                <div className="container">
                <div className="subhead_outer">
                <h2 className="subhead">
                   {/* {location.pathname.replace("/","").replace("-", " ")} */}
                   {props.title}

                    </h2>
                    <p>{props.shortdesc}</p>
                </div>
                </div>
                </section>    
        </div>
    )
}

export default Subheader
 