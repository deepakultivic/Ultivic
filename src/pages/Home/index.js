import React, { useEffect } from "react";
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
import { BackgroundImage } from "react-image-and-background-image-fade";

function Home() {

  useEffect(() => {
    var wow = new WOW(
      {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {

        },
        scrollContainer: null
      }

    );
    wow.init();
  }, [])


  return (
    <div>

      <Header />
      <div className="bodywrap">
        <section className="baner_design">
          <BackgroundImage
            src='assets/home/Home-page.jpg'
            isResponsive
            className=""
            lazyLoad
          />

          <div className="hero_wrappr">
            <div className="bennr_inner">
              <div className="right_align">
                <div className="right_align_inner wow fadeInUp" data-wow-iteration="1" data-wow-delay="0.5s" style={{ visibility: "hidden" }}>
                  <h1 >We are <span className="banner_brand">Innovative</span></h1>
                  <p > We seek to understand, how well we are performing,
                    <br /> both as individuals and as a team. We seek to continuously
                    <br /> Performance improvement as we have set certain
                    <br /> Standards in our organization. Changing and adapting
                    <br />is part of our job. We look forward to new opportunities and <br /> Create innovative solutions
                  </p>
                  <Link to="/contact" className="banner_link ">Get In Touch <i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>

            </div>
          </div>
        </section>

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
                    <div className="mb-0"><p className="comp_info">Share your idea and we make it Real. We ensure great customer service means following best practices
                      like valuing customer's time, resources, and having a pleasing attitude.</p></div>
                    <h5 className="my-3">
                      Our Technologies
                    </h5>
                    <div className="meter red">
                      <span style={{ width: " 80%" }}></span>
                    </div>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p className="mb-2">Our leading Technologies for software development</p>
                    <ul className="p-0 tech_icons" >
                      <li><img width={"100"} height={"100"} src="assets/home/php.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/java.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/java-script.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/node-js.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/laravel.png" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/physics.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/codeigniter.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/cakephp.png" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/android.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/apple.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/html-5.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/css-3.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/photoshop.svg" alt="ultivic image" /></li>
                      <li><img width={"100"} height={"100"} src="assets/home/illustrator.svg" alt="ultivic image" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img width={"100"} height={"100"} src="assets/home/services.svg" alt="ultivic image" />
              </div>
            </div>
          </div>
        </section>
        <section className="inner_about space body-blk position-relative">
          <div className="container">
            <div className="gradient_circle"></div>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="about_img_box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about_blog left_blog">
                        <ul className="mobile_space">
                          <li className="blog_element mb-3" >
                            <img width={"100"} height={"100"} src="/assets/home/about-03.jpg" alt="ultivic image" />
                            <div className="blog_info">
                              <div className="blog_info_inner">
                                <h6><Link to="/blog/How%20to%20become%20a%20better%20programmer" >How to become a better programmer</Link></h6>
                                <Link to="/blog/How%20to%20become%20a%20better%20programmer" >Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li className="blog_element mb-2" >
                            <img width={"100"} height={"100"} src="assets/services/we_want_you.jpg" alt="ultivic image" />
                            <div className="blog_info">
                              <div className="blog_info_inner">
                                <h6>Start Your Career with Us</h6>
                                <Link to="/career">know more</Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mobile_space">
                        <div className="about_portfolio ">
                          <img width={"100"} height={"100"} src="assets/services/graphics_img.jpg" alt="ultivic image" />
                          <div className="portfoli_outer_about">
                            <div className="portfolio_text">
                              <p>Some of our Amazing Work</p>
                              <a href="/graphic">Explore</a>
                            </div>
                          </div>
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
                    We are a Software Development Company, we deal with the latest technologies to develop software, mobile applications, and games. We are specialized in iOS, Android, and digital marketing. Our mission is to provide a sense of contentment to our clients
                  </p>
                  <p className="about_info clr-wht mt-3">
                    Founded in 2017 we have come a long way and have miles to go with our client's support. Our passion and aim are to be the best in the Industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Steps />
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
                    <h2 className="common_heading">More than 100 happy Clients</h2>
                  </div>
                  <p>We aim to be the extended IT partner for our clients and empower them to realise their potential.
                    Here’s what our clients have to say about us.</p>
                </div>
              </div>
            </div>
          </div>
          <Testimonials />
        </section>
        <section className="Blogs space body-blk position-relative">
          <div className="container">
            <div className="headings_outer text-center ">
              <h6 className="sub_heading">Latest Blogs</h6>
              <h2 className="common_heading clr-wht">Grow your knowledge with us  </h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="gradient_circle"></div>
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
