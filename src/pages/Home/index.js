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
import axios from "axios";
import { BackgroundImage } from "react-image-and-background-image-fade";
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
        <BackgroundImage
          src="assets/home/home_bg.png"
          isResponsive
          className="baner_design"
          transitionTime=".2s"
          lazyLoad
        >
          <section className="">
            <div className="hero_wrappr">
              <div className="bennr_inner">
                <div className="right_align">
                  <div className="right_align_inner">
                    <h1 className="wow fadeInUp" data-wow-delay="0.5s">We are <span className="banner_brand">Innovative</span></h1>
                    <p className="wow fadeInUp" data-wow-delay="0.5s"> We seek to understand, how well we are performing, <br /> both as individual and as a team. We seek to continuous  <br /> performance improvement as we have set certain <br /> standards


                      in our organization. Changing  and adapting  <br /> is part of our job.  We look forward for  new opportunities and <br /> create innovative solutions
                    </p>
                    <Link to="/contact" className="banner_link ">Get In Touch <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </BackgroundImage>
        <section className="services space">
          <div className="container">

            <div className="row align-items-center">

              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="section-title ml-lg-5">
                  <div className="wow slideInLeft" data-wow-delay="0.2s">
                    <h6 className="sub_heading placement">Our Expertise</h6>
                    <h4 className="title mb-4">
                      We Provide IT solutions <br /> that performs.

                    </h4>
                    <p className="mb-0"><p className="comp_info">Share your idea and we make it Real. We ensure great customer service means following best practices like valuing customers's time, resources and having pleasing attitude.</p></p>
                    <h5 className="my-3">
                      Our Technologies
                    </h5>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p className="mb-2">Our leading Technolgies for software development</p>
                    <ul className="p-0 tech_icons" >
                      <li><img src="assets/home/php.svg" alt="" /></li>
                      <li><img src="assets/home/java.svg" alt="" /></li>
                      <li><img src="assets/home/java-script.svg" alt="" /></li>
                      <li><img src="assets/home/node-js.svg" alt="" /></li>
                      <li><img src="assets/home/laravel.png" alt="" /></li>
                      <li><img src="assets/home/physics.svg" alt="" /></li>
                      <li><img src="assets/home/codeigniter.svg" alt="" /></li>
                      <li><img src="assets/home/cakephp.png" alt="" /></li>
                      <li><img src="assets/home/android.svg" alt="" /></li>
                      <li><img src="assets/home/apple.svg" alt="" /></li>
                      <li><img src="assets/home/html-5.svg" alt="" /></li>
                      <li><img src="assets/home/css-3.svg" alt="" /></li>
                      <li><img src="assets/home/photoshop.svg" alt="" /></li>
                      <li><img src="assets/home/illustrator.svg" alt="" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/home/services.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="inner_about space body-blk">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="about_img_box">

                  <div className="row">
                    <div className="col-md-6">
                      <div className="about_blog left_blog">
                        <ul className="mobile_space">
                          <li className="blog_element mb-3" >
                            <img src="/assets/home/about-03.jpg" alt="" />
                            <div className="blog_info">
                              <div className="blog_info_inner">
                                <h6><Link to="/blog/3" >How to become a better programmer</Link></h6>
                                <p><Link to="/blog/3" >Read More</Link></p>
                              </div>
                            </div>
                          </li>
                          <li className="blog_element mb-2" >
                            <img src="assets/services/we_want_you.jpg" alt="" />
                            <div className="blog_info">
                              <div className="blog_info_inner">
                                <h6>Start Your Career with Us</h6>
                                <p><Link to="/career">know More</Link></p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mobile_space">
                        <div className="about_portfolio ">
                          <img src="assets/services/graphics_img.jpg" alt="" />
                          <div className="portfoli_outer_about">
                            <div className="portfolio_text">
                              <p>Some of our Amazing Work</p>
                              <a href="/graphic">Explore</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="about_testimonials mobile_space">
                        <div className="about_testimonials_outer">
                          <div className="tetimonail_text">
                            <p> Harmanpreet and her team are really committed and deliver a good job. We will keep working with them on a long-term basis. She is smart and effective. She is flexible and provides quality solutions.
                            </p>
                          </div>
                          <div className="testimonial_img">
                            <img className="mr-3 rounded-circle" src="assets/home/jeorge.png" alt="Generic placeholder image" />
                            <div>
                              <p className="client_name">GEORGE DEPREZ

                              </p>
                              <p className="client_desgnation">Solution Architecture</p>
                            </div>
                          </div>
                          <p className="star rating"><i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_cont_box wow fadeInUp" data-wow-delay="0.3s">
                  <div className="headings_outer ">
                    <div className="mobile_center">
                      <h6 className="sub_heading placement">About us</h6>
                    </div>
                    <h2 className="common_heading clr-wht">
                      We are Creative And Professional Agency
                    </h2>
                  </div>
                  <p className="about_info clr-wht">
                    We are Software Development Company, we deal in latest technologies to develope softwares, mobile applications and games. We are specialized in iOS, Android and digital marketing. our mission is providing sense of contentment to our clients
                  </p>
                  <p className="about_info clr-wht">
                    Founded in 2017 we have come a long way and miles to go with our client's support. Our passion and aim is to be the best in the Industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" space_bottom">
          <Steps />
        </div>
        <section className=" portfolio">
          <div className="container">
            <div className="headings_outer text-center mb-5">
              <h6 className="sub_heading">Our Work</h6>
              <h2 className="common_heading">Some brands that we’ve helped
              </h2>
            </div>
          </div>
          <Portfolio />
        </section>
        <section className="testimonial space  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 wow slideInLeft" data-wow-delay="0.2s">
                <div className="headings_outer mobile_space  mb-4">
                  <div className="mobile_center">
                    <h6 className="sub_heading placement">Happy Clients</h6>
                    <h2 className="common_heading">More than 500+ happy Clients</h2>
                  </div>
                  <p>We aim to be the extended IT partner for our clients and empower them to realise their potential.
                    Here’s what our clients have to say about us.</p>
                </div>
              </div>
            </div>
          </div>
          <Testimonials />
        </section>
        <section className="Blogs space body-blk">
          <div className="container">
            <div className="headings_outer text-center ">
              <h6 className="sub_heading">Latest Blogs</h6>
              <h2 className="common_heading clr-wht">Grow your knowledge with us  </h2>
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
