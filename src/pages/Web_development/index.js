import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loader from '../../components/Loader';
function Web() {
 const [preloader, setPreloader] = useState(true)
 const [timer, setTimer] =useState(3);
 
 const id = React.useRef(null);
 const clear = () =>{
   window.clearInterval(id.current);
   setPreloader(false);
 }
 useEffect(() => {
   id.current = window.setInterval(()=>{
    setTimer((timer)=>timer-1)
   },1000)
 }, [])
 useEffect(() => {
if(timer === 0){
  clear();
}
 }, [timer])
 
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
      }
    }]

  };

  return (
  

     <div>
        <Header />
      <Subheader title="Discover amazing" sub="sites" img="/assets/services/web-development.jpg" clases="web bg_overlay" shortdesc="Making websites that works for you!
 " />

      <section className="space service_about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img width={"100"} height={"100"} src="assets/home/web_about.png" alt="ultivic logo" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 ">
              <div className="section-title ml-lg-5">
                <h6 className="sub_heading placement">Web Development
                </h6>
                <h4 className="title mb-2">
                  What is Web Development ?

                </h4>
                <p className="text-muted mb-0">Web development means building, creating and mantaining websites. It includes aspects such as web design, web publishing and database management. Web developers use numerous code languages. The language depends on the platforms.</p>
                <h5 className="my-3">
                  Our Technologies
                </h5>
                {/* <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae voluptate incidunt</p> */}
                <ul className="p-0 tech_icons" >
                  <li><img width={"100"} height={"100"} src="assets/home/php.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/java.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/java-script.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/node-js.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/laravel.png" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/physics.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/codeigniter.svg" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/cakephp.png" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/spring_mvc.png" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/springboot.png" alt="ultivic logo" /></li>
                  <li><img width={"100"} height={"100"} src="assets/home/strut_2.png" alt="ultivic logo" /></li>

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
            <div className='col-md-4 col-sm-6 col-12'>
              <div className="cardouter">
                <div className='why_choose_card'>
                  <div className='why_icon'>
                    <img width={"100"} height={"100"} src="assets/about/web-design.svg" alt="ultivic logo" />
                  </div>
                  <div className='why_card_content'>
                    <h4>Excellent Frontend</h4>
                    <p>As front-end developers, our job is, essentially, to turn designs into reality via code. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className="cardouter">
                <div className='why_choose_card'>
                  <div className='why_icon'>
                    <img width={"100"} height={"100"} src="assets/about/coding.svg" alt="ultivic logo" />
                  </div>
                  <div className='why_card_content'>
                    <h4>Solid back-End</h4>
                    <p> Backend Development is everything that the users don’t see and contains behind-the-scenes activities that occur when performing any action on a website. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className="cardouter">
                <div className='why_choose_card'>
                  <div className='why_icon'>
                    <img width={"100"} height={"100"} src="assets/about/maintenance.svg" alt="ultivic logo" />
                  </div>
                  <div className='why_card_content'>
                    <h4> Regulation and Maintenace </h4>
                    <p>Maintenance essentials include regular secure backups, security tools, traffic monitoring, privacy policies, incident response, updates. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className="cardouter">
                <div className='why_choose_card'>
                  <div className='why_icon'>
                    <img width={"100"} height={"100"} src="assets/about/test.svg" alt="ultivic logo" />
                  </div>
                  <div className='why_card_content'>
                    <h4> Full cycle testing and delivery </h4>
                    <p>The Software Testing Life Cycle provides a standardized, sophisticated and robust testing process . </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-sm-12 col-12'>
              <div className="cardouter">
                <div className='why_contact why_choose_card align-items-center'>
                  <h3>Get in Touch</h3>
                  <p className='ml-auto'><a href="/contact">Know More</a></p>
                </div>
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
                        Every vehicle online, priced in real time. An unprecedented look into the entire automotive market.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="project_image">
                      <img width={"100"} height={"100"} src="assets/portfolio/graphics-01.png" alt="ultivic logo" />
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
                      <img width={"100"} height={"100"} src="assets/portfolio/graphics-02.png" alt="ultivic logo" />
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
                      <img width={"100"} height={"100"} src="assets/portfolio/graphics-03.png" alt="ultivic logo" />
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
                      <img width={"100"} height={"100"} src="assets/portfolio/graphics-04.png" alt="ultivic logo" />
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
                      <img width={"100"} height={"100"} src="assets/portfolio/graphics-05.png" alt="ultivic logo" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="foot_outer">
        <div className="container">
          <div className="foot_inner">
            <h4>New Heights With Invision Solutions! </h4>
            <h2> TAKE YOUR PROJECT TO </h2>
            <p>Our Web Developers’ team offers the most incredible Website solutions in the market within your timeline and budget level. Reach out to us, and we’re going to help extend your horizon to hit new heights!
          </p>
          <div className="global_btn mt-3 "><a className="" href="/contact"> Contact Us<i className="fa fa-long-arrow-right ml-2"></i></a></div>
          </div>
        </div>
      </section>
      <Footer />
     </div>
   
  
  )
}

export default Web;
