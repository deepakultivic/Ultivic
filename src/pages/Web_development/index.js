import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";

import Foot from "../../components/Foot";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Web() {
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
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
    return <div className="w-100 text-center my_loader">
      <p></p><div className="loader1">
        <div>
          <img src="/assets/header/logo-white.png" alt="logo" />
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  }
  else {
    return (
      <div>
        <Header />
        <Subheader title="Discover amazing" sub="sites" clases="web bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
        {/* <Aboutglobal
          imgsrc={content[2].imgsrc}
          about_exp={content[2].about_exp}
          sub_heading={content[2].sub_heading}
          common_heading={content[2].common_heading}
          about_info={content[2].about_info}
        /> */}
        <section className="space service_about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="assets/home/web_about.png" alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="section-title ml-lg-5">
                  <h6 className="sub_heading placement">Web Development
                  </h6>
                  <h4 className="title mb-2">
                    What is Web Development ?

                  </h4>
                  <p className="text-muted mb-0">Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are performing and the platforms on which they are working.</p>
                  <h5 className="my-3">
                    Our Technologies
                  </h5>
                  {/* <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae voluptate incidunt</p> */}
                  <ul className="p-0 tech_icons" >
                  <li><img src="assets/home/php.svg" alt="" /></li>
                      <li><img src="assets/home/java.svg" alt="" /></li>
                      <li><img src="assets/home/java-script.svg" alt="" /></li>
                      <li><img src="assets/home/node-js.svg" alt="" /></li>
                      <li><img src="assets/home/laravel.png" alt="" /></li>
                      <li><img src="assets/home/physics.svg" alt="" /></li>     
                      <li><img src="assets/home/codeigniter.svg" alt="" /></li>    
                      <li><img src="assets/home/cakephp.png" alt="" /></li>  
                      <li><img src="assets/home/spring_mvc.png" alt="" /></li>  
                      <li><img src="assets/home/springboot.png" alt="" /></li>  
                      <li><img src="assets/home/strut_2.png" alt="" /></li>  

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
<section className="why_choose space">
<div className="container">
        <h6 className="sub_heading placement">Why Choose</h6>
        <h4 className="title mb-5">Our experts made it easier</h4>
        <div className='row'>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/web-design.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4>Excelent Frontend</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/coding.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4>Solid back-End</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/maintenance.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4> Regulation and Maintenace </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/test.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4> Full cycle testing and delivery </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-8'>
              <div className='why_contact why_choose_card align-items-center'>
                  <h3>Get in Touch</h3>
                  <p className='ml-auto'><a href="/contact">Know More</a></p>
              </div>
            </div>
        </div>
</div>
</section>
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in dolorum non repudiandae consequatur quos esse nisi aperiam commodi quis nesciunt id, aut tempore, labore facilis soluta, neque fuga consequuntur.
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in dolorum non repudiandae consequatur quos esse nisi aperiam commodi quis nesciunt id, aut tempore, labore facilis soluta, neque fuga consequuntur.
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in dolorum non repudiandae consequatur quos esse nisi aperiam commodi quis nesciunt id, aut tempore, labore facilis soluta, neque fuga consequuntur.
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in dolorum non repudiandae consequatur quos esse nisi aperiam commodi quis nesciunt id, aut tempore, labore facilis soluta, neque fuga consequuntur.
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in dolorum non repudiandae consequatur quos esse nisi aperiam commodi quis nesciunt id, aut tempore, labore facilis soluta, neque fuga consequuntur.
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
        <Foot />
        <Footer />
      </div>
    )
  }
}
export default Web;
