import React from 'react'
import { BackgroundImage } from "react-image-and-background-image-fade";
function Subheader(props) {
  
    return (
        <div>
 <BackgroundImage
      src={props.img}
     
      isResponsive
      className={props.clases}
      transitionTime=".5s"
      lazyLoad
    >
            <section className={props.clases} >
                <div className="container">
                <div className="subhead_outer">
                <h2 className="subhead">
                
                   {props.title} <span>{props.sub}</span>

                    </h2>
                    <p>{props.shortdesc}</p>
                </div>
                </div>
                </section>    
                </BackgroundImage>
        </div>
    )
}

export default Subheader
 