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
  const [ourblog, setOurblog] = useState([])
  useEffect(() => {
    function myblogData() {
      axios.get("https://ums.ultivic.com/api/development/blogs?page=1")
        .then((response) => {
          const myBogs = response.data.data.data;

          console.log(myBogs)
          setOurblog(myBogs);

        })
    }
    myblogData();
    


  }, [])



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
      transitionTime=".5s"
      lazyLoad
    >
        <section className="">
          <div className="container">
            <div className="bennr_inner">
            <div className="right_align">
               <div className="right_align_inner">
               <h1 className="wow fadeInUp" data-wow-delay="0.3s">We are <span className="banner_brand">Innovative</span></h1>
              <p className="wow fadeInUp" data-wow-delay="0.3s"> This handy tool helps you create dummy text <br />
              for all your layout needs . We are gradually adding <br />
              new functionality and we welcome your suggestions <br />and feedbacks </p>
              <Link to="/contact" className="banner_link ">Get In Touch <i className="fa fa-long-arrow-right"></i></Link>
               </div>
              </div>
             
            </div>
          </div>
        </section>
        </BackgroundImage>
        <section className="inner_about space ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="about_img_box">

                  <div className="row">
                    <div className="col-md-6">
                      <div className="about_blog">
                        <ul className="">
                          {ourblog.slice(0, 2).map((curelem, index) => {
                            const { title, description, image, id } = curelem;
                            return (

                              <li className="blog_element mb-2" key={index}>
                                <img src={image} alt="" />
                                <div className="blog_info">
                                  <div className="blog_info_inner">
                                    <h6><Link to={`/blog/${id}`}>{title}</Link></h6>
                                    <p><Link to={`/blog/${id}`}>Read More</Link></p>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                          }

                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about_portfolio ">
                        <img src="assets/home/about-01.png" alt="" />
                        <div className="portfoli_outer_about">
                        <div className="portfolio_text">
                            <p>Some of our Amazing Work</p>
                            <a href="/portfolio">Explore</a>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="about_testimonials">
                        <div className="about_testimonials_outer">

                          <div className="tetimonail_text">

                            <p>  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,  Donec lacinia congue felis in faucibus.</p>

                          </div>
                          <div className="testimonial_img">
                            <img className="mr-3 rounded-circle" src="assets/home/cleint1.png" alt="Generic placeholder image" />
                            <div>
                              <p className="client_name">Mark Lukey</p>
                              <p className="client_desgnation">Ceo Fitzu</p>
                             
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
                    <h6 className="sub_heading placement">About us</h6>
                    <h2 className="common_heading">
                      We are Creative And Professional Agency
                    </h2>
                  </div>
                  <p className="about_info">
                    We are software development company that uses latest technologies to develop software. We provide services in website development, mobile application development in android and ios, game development and digital marketing. Our mission is to help our clients to grow their business with poweful products.
                  </p>
                  <p className="about_info">
                    Founded in 2017 we have come a long way from its begning. Our passion for fullfilment client requirement makes us best company in the field of software development.
                  </p>
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
                  <p className="text-muted mb-0">You share your Ideas and We Make It Real. We ensure the true worth of your valuable time and money you invested on us by delivering the perfect solutions that meet client’s needs, expectations and budget.</p>
                <h5 className="my-3">
                  Our Technologies
                </h5>
                  </div>
               <div className="wow fadeInUp" data-wow-delay="0.3s">
               <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae voluptate incidunt</p>
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
        <section className="Blogs space">
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
