import React from 'react';
function Aboutglobal(props) {
  return (
    <section className="inner_about space inner_mision">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_img_box">
              <img  src={props.imgsrc} alt="ultivic image" width={"100"} height={"100"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_cont_box">
              <div className="headings_outer mobile_center">
                <h6 className="sub_heading placement">{props.sub_heading}</h6>
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
