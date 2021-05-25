import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import Blogs from "../../components/Blogs";
import Homecontact from "../../components/Homecontact"; 
import blogdata from "../../components/Blogs/blogdata"
import {WOW} from 'wowjs'

function Home() {
  const wow = new WOW({
    offset: 100,
    mobile: false,
    live: true
})
function blogs(val, i){
 return(
  <Blogs 
  blog_imgs={val.blog_imgs}
  tittle={val.tittle} 
  description={val.description}
  blog_link={val.blog_link}
  date={val.date}
 />
 )

}
wow.init();

  return (
    <div>
      <Header />
      <div className="bodywrap">
        <section className="baner_design">
          <div className="container">
            <div className="bennr_inner">
              <h4>We build</h4>
              <h1> <span className="banner_brand">Brand</span> Experience</h1>
              <a href="/contact" className="banner_link">Get In Touch <i className="fa fa-long-arrow-right"></i></a>
            </div>
          </div>
        </section>
        <section className="home_about space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_about_img wow slideInLeft" ata-wow-delay="0.3s">
                  <img
                    src="./assets/home/about_image.png"
                    alt="Ultivic about"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home_about_content wow slideInRight" ata-wow-delay="0.3s">
                  <div className="headings_outer">
                    <h6 className="sub_heading">About us</h6>
                    <h2 className="common_heading">
                      IT Solution Agency For Your Business
                    </h2>
                  </div>
                  <p className="about_description">
                    Share your IDEA and We Will Make It Real”. We ensure true
                    worth of your valuable time and money you invested on us by
                    delivering the perfect product deliver solutions that meet
                    client’s needs, expectations and budget.
                  </p>
                  <div className="progress_bars">
                    <h4 className="bar_heading">Web Development</h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-danger"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>
                  <div className="progress_bars">
                    <h4 className="bar_heading">Web Development</h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-danger"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>
                  <div className="progress_bars">
                    <h4 className="bar_heading">Web Development</h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-danger"
                        style={{ width: "80%" }}
                      >
                        80%
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
            <div className="headings_outer text-center mb-5">
              <h6 className="sub_heading">Services</h6>
              <h2 className="common_heading">Services we Provide</h2>
            </div>
            <div className="row wow slideInLeft" ata-wow-delay="0.3s"> 
              <div className="col-lg-4 col-md-6">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="services_grid">
                  <div className="services_grid_img">
                    <img
                      src="/assets/home/user-interface.png"
                      alt="ultivic services"
                    />
                  </div>
                  <div className="services_grid_text">
                    <h4>App Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section className=" portfolio">
          <div className="container">
            <div className="headings_outer text-center space">
              <h6 className="sub_heading">Services</h6>
              <h2 className="common_heading">Services we Provide</h2>
            </div>
          </div>

          <Portfolio />
        </section>
        <section className="testimonial">
          <div className="container">
            <div className="headings_outer text-center space">
              <h6 className="sub_heading">Happy Clients</h6>
              <h2 className="common_heading">More than 500+ happy Clients</h2>
            </div>
          </div>

          <Testimonials />
        </section>
        <section className="Blogs space animate__animated animate__bounce">
          <div className="container">
            <div className="headings_outer text-center ">
              <h6 className="sub_heading">Happy Clients</h6>
              <h2 className="common_heading">More than 500+ happy Clients</h2>
            </div>
          </div>
          <div className="container">
        <div className="row">
       
     
   {  blogdata.map(blogs)}
     
     
        </div>
        <div className="global_btn">
            <a href="cm-btn">
              View All <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
      </div>      
          
         
        </section>
        <section className="contact_us space">
        <Homecontact/>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
