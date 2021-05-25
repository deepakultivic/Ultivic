import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
function Gallery(props) {
  return (
    <div>
      <section className="grid gallery space">
        <div className="container gallery-container">
          <div class="headings_outer text-center ">
            <h6 class="sub_heading ">Technologies</h6>
            <h2 class="common_heading">Lorem ipsum dolor sit</h2>
          </div>
          <div className="tz-gallery">
            <SRLWrapper>
              <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6 p-0 ">
                  <div className="grdi_space top_img">
                    <img src={props.img1} alt="img" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space top_img">
                    <img src={props.img2} alt="img" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 p-0">
                  <div className="grdi_space top_img">
                    <img src={props.img3} alt="img" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 p-0">
                  <div className="grdi_space big_img">
                    <img src={props.img4} alt="img" />
                  </div>
                </div>

                <div class="col-sm-6 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space left_img">
                    <img src={props.img5} alt="img" />
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space left_img">
                    <img src={props.img5} alt="img" />
                  </div>
                </div>
              </div>
            </SRLWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
