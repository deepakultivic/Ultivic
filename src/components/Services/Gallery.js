import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
function Gallery({gallery }) {
  console.log(gallery);
  return (
    <div>
      <section className="grid gallery space">
        <div className="container gallery-container">
          <div className="headings_outer text-center ">
            <h6 className="sub_heading ">Technologies</h6>
            <h2 className="common_heading">Lorem ipsum dolor sit</h2>
          </div>
     
            <SRLWrapper>
              
           <div className="row">

           {gallery.map((item, index)=>{
                return(
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
              
              {/* <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6 p-0 ">
                  <div className="grdi_space top_img">
                    <img src={props.img1} alt="img" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space top_img">
                    <img src={props.img2} alt="img" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space top_img">
                    <img src={props.img3} alt="img" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space big_img">
                    <img src={props.img4} alt="img" />
                  </div>
                </div>

                <div className="col-sm-12 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space left_img">
                    <img src={props.img5} alt="img" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 p-0">
                  <div className="grdi_space left_img">
                    <img src={props.img5} alt="img" />
                  </div>
                </div>
              </div> */}
            </SRLWrapper>
       
         
        </div>
      </section>
    </div>
  );
}

export default Gallery;
