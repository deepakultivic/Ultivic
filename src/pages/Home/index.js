import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import Blogs from "../../components/Blogs";
import Homecontact from "../../components/Homecontact";
import Steps from "../../components/steps/Steps";
import { WOW } from 'wowjs'
import { Link } from 'react-router-dom'

function Home() {



  // If page is not in loading state, display page.

  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  return (
    <div>
      <Header />
      <div className="bodywrap">
        <section className="baner_design">
          <div className="container">
            <div className="bennr_inner">
              <h4 className="wow fadeInUp" data-wow-delay="0.5s">We incorporate</h4>
              <h1 className="wow fadeInUp" data-wow-delay="0.5s"> <span className="banner_brand">Innovation</span> With your vision </h1>
              <Link to="/contact" className="banner_link ">Get In Touch <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </section>
        <section className="home_about space">
          {/* <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="home_about_img wow fadeInLeft" data-wow-delay="0.3s">
                    <img
                      src="./assets/home/about_image.png"
                      alt="Ultivic about"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home_about_content wow fadeInRight" data-wow-delay="0.3s">
                    <div className="headings_outer">
                      <h6 className="sub_heading placement">About us</h6>
                      <h2 className="common_heading">
                        We Provide IT solutions that performs.
                      </h2>
                    </div>
                    <p className="about_description">
                      You share your Ideas and We Make It Real. We ensure the true worth of your valuable time and money you invested on us by delivering the perfect solutions that meet client’s needs, expectations and budget.
                    </p>
                    <div className="progress_bars">
                      <h4 className="bar_heading">Web Development</h4>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          style={{ width: "95%" }}
                        >
                          95%
                        </div>
                      </div>
                    </div>
                    <div className="progress_bars">
                      <h4 className="bar_heading">App Development</h4>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped "
                          style={{ width: "92%" }}
                        >
                          92%
                        </div>
                      </div>
                    </div>
                    <div className="progress_bars">
                      <h4 className="bar_heading">Graphics Design</h4>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped graphic_bg"
                          style={{ width: "88%" }}
                        >
                          88%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 mt-4 pt-2">
                        <div class="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-01.png" class="img-fluid" alt="Image" />
                          <div class="img-overlay bg-dark"></div>
                        </div>
                      </div>


                      <div class="col-12">
                        <div class="mt-0 pt-2 text-right">
                          <div class="global_btn"><a href="/about">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-02.png" class="img-fluid" alt="Image" />
                          <div class="img-overlay bg-dark"></div>
                        </div>
                      </div>


                      <div class="col-lg-12 col-md-12 mt-4 pt-2">
                        <div class="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-03.png" class="img-fluid" alt="Image" />
                          <div class="img-overlay bg-dark"></div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                <div class="section-title ml-lg-5">
                  <h6 className="sub_heading placement">About us</h6>
                  <h4 class="title mb-4">
                    We Provide IT solutions <br /> that performs.

                  </h4>
                  <p class="text-muted mb-0">You share your Ideas and We Make It Real. We ensure the true worth of your valuable time and money you invested on us by delivering the perfect solutions that meet client’s needs, expectations and budget.</p>

                  <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                      <div class="media align-items-center p-2">
                        <i class="fa fa-lightbulb-o h4 mb-0 text-custom"></i>
                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Creative Ideas</a></h6>
                      </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                      <div class="media align-items-center p-2">
                        <i class="fa fa-users h4 mb-0 text-custom"></i>
                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Team Work</a></h6>
                      </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                      <div class="media align-items-center p-2">
                        <i class="fa fa-building-o h4 mb-0 text-custom"></i>
                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Work Strategy</a></h6>
                      </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                      <div class="media align-items-center rounded shadow p-2">
                        <i class="fa fa-cubes h4 mb-0 text-custom"></i>
                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Client Handling</a></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className="services space">
          <div className="container">
            {/* <div className="headings_outer text-center mb-5">
                <h6 className="sub_heading">Services</h6>
                <h2 className="common_heading mb-5 pb-5">Services we Provide</h2>
              </div> */}
            {/* <div className="row wow fadeInLeft" data-wow-delay="0.3s">
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/graphic-tablet.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text">
                      <h4>Graphic Design</h4>
                      <p>
                        We focus on creating aesthetics that maximize usability & serve a purpose to your brand.
  
  
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/development.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text">
                      <h4>Web Development</h4>
                      <p>
                        We make a website that looks great, work fast and perform well with a seamless user experience.
  
  
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/user-interface.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text ">
                      <h4>App Development</h4>
                      <p>
                        With the mobile web revolution at it’s peak We provide you a customized app with user centered approach.
  
  
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/programming.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text">
                      <h4>UI/UX</h4>
                      <p>
                        We centre on creating user interface that helps users easily interact with your digital product.  </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/game-development.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text">
                      <h4 >Game Development</h4>
                      <p>
                        To help you turn your vision into reality we build amazing games & maximize reach.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-outer">
                  <div className="services_grid">
                    <div className="services_grid_img">
                      <img
                        src="/assets/home/testing.png"
                        alt="ultivic services"
                      />
                    </div>
                    <div className="services_grid_text">
                      <h4>Testing</h4>
                      <p  >
                        We evaluate your brand’s product so that it satisfies your specified requirements. </p>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="row align-items-center">

              <div class="col-lg-6 col-md-6 col-12 ">
                <div class="section-title ml-lg-5">
                  <h6 className="sub_heading placement">Our Expertise</h6>
                  <h4 class="title mb-4">
                    We Provide IT solutions <br /> that performs.

                  </h4>
                  <p class="text-muted mb-0">You share your Ideas and We Make It Real. We ensure the true worth of your valuable time and money you invested on us by delivering the perfect solutions that meet client’s needs, expectations and budget.</p>
                <h5 className="my-3">
                  Our Technologies
                </h5>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae voluptate incidunt</p>
                  <ul className="p-0 tech_icons" >
                      <li><img src="assets/home/php.svg" alt="" /></li>
                      <li><img src="assets/home/java.svg" alt="" /></li>
                      <li><img src="assets/home/android.svg" alt="" /></li>
                      <li><img src="assets/home/photoshop.svg" alt="" /></li>
                      <li><img src="assets/home/illustrator.svg" alt="" /></li>
                  </ul>
                  <ul className="p-0 tech_icons" >
                 
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/home/services.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="wow fadeInLeft space_bottom" data-wow-delay="0.3s">
          <Steps />
        </div>
        <section className=" portfolio wow fadeInRight" data-wow-delay="0.3s">
          <div className="container">
            <div className="headings_outer text-center mb-5">
              <h6 className="sub_heading">Our Work</h6>
              <h2 className="common_heading">Some brands that we’ve helped
              </h2>
            </div>
          </div>

          <Portfolio />
        </section>
        <section className="testimonial space  wow slideInLeft" data-wow-delay="0.3s">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="headings_outer  mb-4">
                  <h6 className="sub_heading placement">Happy Clients</h6>
                  <h2 className="common_heading">More than 500+ happy Clients</h2>
                  <p>We aim to be the extended IT partner for our clients and empower them to realise their potential.
                    Here’s what our clients have to say about us.

                    testmonial
                    We had a ve</p>
                </div>
              </div>
            </div>
          </div>

          <Testimonials />
        </section>
        <section className="Blogs space wow fadeInRight" data-wow-delay="0.3s">
          <div className="container">
            <div className="headings_outer text-center ">
              <h6 className="sub_heading">Latest Blogs</h6>
              <h2 className="common_heading">Grow your knowledge with us  </h2>
            </div>
          </div>
          <div className="container-fluid">



            <div className="row">
              <div className="col-xl-9 m-auto col-lg-12">
                <Blogs />
              </div>
            </div>




            <div className="global_btn">
              <Link to="/blogs">
                View All <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>


        </section>


        <section className="contact_us space">
          <Homecontact />
        </section>
      </div>

      <Footer />
    </div>
  );
}




export default Home;
