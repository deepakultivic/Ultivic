import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
function Gallery({ gallery }) {
  console.log(gallery);
  return (
    <div>
      <section className="grid gallery space">
        <div className="container gallery-container">
          <div className="headings_outer text-center ">
            <h6 className="sub_heading ">Our Work</h6>
            <h2 className="common_heading">Lorem ipsum dolor sit</h2>
          </div>
          <SRLWrapper>
            <div className="row">
              {gallery.map((item, index) => {
                return (
                  <div className="col-sm-12 col-lg-4 col-md-6 p-0 " key={index}>
                    <div className="grdi_space ">
                      <div className="top_img">
                        <img src={item.img} alt="img" />
                      </div>
                    </div>
                  </div>
                );
              })
              }
            </div>          
          </SRLWrapper>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
