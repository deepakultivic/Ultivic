import React from 'react';
function Aboutglobal(props) {
  return (
    <section className="inner_about space inner_mision">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <div className="about_img_box">
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
              <img src={props.imgsrc} alt="" />

            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_cont_box">
              <div className="headings_outer ">
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
