import React from 'react'
import './style.css'
function Subheader(props) {
    return (
        <div>
            <section className={props.clases} >
                <div className="container">
                <h2 className="subhead">
                    {props.title}

                    </h2>
                </div>
                </section>    
        </div>
    )
}

export default Subheader
