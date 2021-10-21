import React from 'react'
function Subheader(props) {
  
    return (
        <div>
            <section className={props.clases} >
                <div className="container">
                <div className="subhead_outer">
                <h2 className="subhead">
                
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
 