import React from 'react'

function Aboutglobal(props) {


    return (
      
           
        <section className="inner_about space inner_mision">
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <div className="about_img_box">
                  <img src={props.imgsrc} alt="" />
                  <div className="about_exp ">
                    <p>
                    {props.about_exp}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about_cont_box">
                  <div className="headings_outer ">
                    <h6 className="sub_heading">{props.sub_heading}</h6>
                    <h2 className="common_heading">{props.common_heading}</h2>
                  </div>
                  <p className="about_info">
                  {props.about_info}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> 
        
    )
}

export default Aboutglobal
