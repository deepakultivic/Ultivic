import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BackgroundImage } from "react-image-and-background-image-fade";
import Aboutglobal from "../../components/Aboutglobal";
import content from "../../components/Aboutglobal/content";
import Planning from "../../components/Services/Planning";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pdata from "../../components/Services/pdata";
import Foot from "../../components/Foot";
import "./style.css";
import Techbox from "../../components/Services/Techbox";
import { tbdata } from "../../components/Services/pdata";

function Graphic() {
  const [loading, setLoading] = useState(true);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,

  };


  return (
    <div>
      <Header />
      <BackgroundImage
        src="assets/services/ui-ux-banner-2.png"

        isResponsive
        className="image graphic bg_overlay"
        transitionTime=".5s"
        lazyLoad
      >
        <section className="graphic bg_overlay">
          <div className="container">
            <div className="subhead_outer">
              <div className="right_align">
                <div className="right_align_inner">
                  <h2 className="subhead">
                    Graphic <span>Designing</span>
                  </h2>
                  <p>Buliding efficient,beautiful graphic design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <Aboutglobal
        imgsrc={content[1].imgsrc}
        about_exp={content[1].about_exp}
        sub_heading={content[1].sub_heading}
        common_heading={content[1].common_heading}
        about_info={content[1].about_info}
      />
      <section className="body-blk space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="techn4ology_cont">
                <div className="headings_outer mobile_center">
                  <h6 className="sub_heading placement">Technologies</h6>
                  <h2 className="common_heading clr-wht">Why you should choose ultivic</h2>
                </div>
                <p className="tech_info clr-wht">
                  Ultivic believes in team work, perfection and  better results.We have a team with experience,skills and creativity.We use latest technologies of graphic designing and ensure quality products to our clients.Designs are customized as per customer’s demand and availability in given deadline.

                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                <Techbox
                  textimgsrc={tbdata[4].textimgsrc}
                  tech_box_heading={tbdata[4].tech_box_heading}
                  tech_box_info={tbdata[4].tech_box_info}
                />
                <Techbox
                  textimgsrc={tbdata[5].textimgsrc}
                  tech_box_heading={tbdata[5].tech_box_heading}
                  tech_box_info={tbdata[5].tech_box_info}
                />
                <Techbox
                  textimgsrc={tbdata[6].textimgsrc}
                  tech_box_heading={tbdata[6].tech_box_heading}
                  tech_box_info={tbdata[6].tech_box_info}
                />
                <Techbox
                  textimgsrc={tbdata[7].textimgsrc}
                  tech_box_heading={tbdata[7].tech_box_heading}
                  tech_box_info={tbdata[7].tech_box_info}
                />

              </div>
            </div>
          </div>
        </div>
      </section>
      <Planning
        imgsrc={pdata[0].imgsrc}
        sub_heading={pdata[0].sub_heading}
        common_heading={pdata[0].common_heading}
        planning_info={pdata[0].planning_info}
        planing_pts01={pdata[0].planing_pts01}
        planing_pts02={pdata[0].planing_pts02}
        planing_pts03={pdata[0].planing_pts03}
        planing_pts04={pdata[0].planing_pts04}
        planing_pts05={pdata[0].planing_pts05}
        planing_pts06={pdata[0].planing_pts06}
      />
      <section className="grapic_work space">
        <div className="container_fluid">
          <div className="graphic_inner">
          <Slider {...settings}>
              <div className="gapcis_card">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="project_content">
                      <h3>
                        Auto Grab
                      </h3>
                      <p>
                        Every vehicle online, priced in real time. An unprecedented look into the entire automotive market.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img src="assets/portfolio/graphics-01.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gapcis_card">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="project_content">
                      <h3>
                        Fitzu
                      </h3>
                      <p>
                        Fitzu unlocks the best sporting specialists and trainers in your area at the click of a button. 
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img src="assets/portfolio/graphics-02.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gapcis_card">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="project_content">
                      <h3>
                        Krav maga
                      </h3>
                      <p>
                      Krav Maga is an effective and practical street based self defence system that is based on real life scenarios.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img src="assets/portfolio/graphics-03.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="gapcis_card">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="project_content">
                      <h3>
                        car Buyers
                      </h3>
                      <p>
                        Carbuyers.com.au has pioneered the industry and we are proud of our success and dedication to customer satisfaction since our inception.

                      </p>
                    </div>
                  </div> 
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img src="assets/portfolio/graphics-04.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gapcis_card">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="project_content">
                      <h3>
                        Kimekai
                      </h3>
                      <p>
                        Kimekai is directly affiliated with the Australian Karate Federation (AKF). The AKF conducts routine inspections on all of Kimekai's dojos
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img src="assets/portfolio/graphics-05.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="app_services space">
        <div className="container">
         <div className="mobile_center">
         <h6 className="sub_heading placement">Why Choose</h6>
          <h4 className="title mb-5">We make it perfect at every step</h4>
         </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className="app_ser_outer">
                <div className="app_serv_card">
                  <div className='app_serv_img'>
                    <img src="assets/services/colors.png" alt="" />
                  </div>
                  <div className='app_ser_cintent'>
                    <h4>Latest Color Combination</h4>
                    <p>Aesthetically, color can play lots of different roles in logo design.
 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="app_ser_outer">
                <div className="app_serv_card">
                  <div className='app_serv_img'>
                    <img src="assets/services/toolskit.png" alt="" />
                  </div>
                  <div className='app_ser_cintent'>
                    <h4>Tools kit</h4>
                    <p>Choosing the right set of tools to make the work productive and amazing   </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="app_ser_outer">
                <div className="app_serv_card">
                  <div className='app_serv_img'>
                    <img src="assets/services/gradient.png" alt="" />
                  </div>
                  <div className='app_ser_cintent'>
                    <h4>Bes UI Gradients</h4>
                    <p>Gradients are a surprisingly versatile tool </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </section>
      <Foot />
      <Footer />
    </div>
  );
}


export default Graphic;
