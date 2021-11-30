import React,{useState,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Aboutglobal from "../../components/Aboutglobal";
import content from "../../components/Aboutglobal/content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';


function About() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const [loading, setLoading] = useState(true);
      
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
      return   <div className="w-100 text-center my_loader">
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
  else{
    return (
      <div>
        <Header />
        <Subheader title="About" clases="about" shortdesc="We are Creative And Professional Agency"/>
        <div className="inner_wrap">
          <section className="inner_about space ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="about_cont_box">
                    <div className="headings_outer ">
                      <h6 className="sub_heading ">About us</h6>
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
                <div className="col-lg-7">
                  <div className="about_img_box">
                    <img src="/assets/about/about_demo.png" alt="" />
                    <div className="about_exp">
                      <h5>6</h5>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="about_counter">
            <div className="container">
              <div className="main_count">
                <div className="row">
                  <div className="four col-md-3">
                    <div className="counter-box colored">
                      <span className="counter"><CountUp start={0} end={100} duration={2.75} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp> </span>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                  <div className="four col-md-3">
                    <div className="counter-box">
                      <span className="counter"><CountUp start={0} end={100} duration={2.75} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp></span>
                      <p>Successful Projects</p>
                    </div>
                  </div>
                  <div className="four col-md-3">
                    <div className="counter-box">
                      <span className="counter"> <CountUp start={0} end={100} duration={2.75} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp></span>
                      <p>Team members</p>
                    </div>
                  </div>
                  <div className="four col-md-3">
                    <div className="counter-box">
                      <span className="counter"> <CountUp start={0} end={50} duration={2.75} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp></span>
                      <p className="animate__animated animate__bounce">
                        Awards wining
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <Aboutglobal
            imgsrc={content[0].imgsrc}
            about_exp={content[0].about_exp}
            sub_heading={content[0].sub_heading}
            common_heading={content[0].common_heading}
            about_info={content[0].about_info}
          /> */}
  
          <section className="inner_about inner_achivement space">
            <div className="container">
              <div className="inner_achivement_sec">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-12">
                    <div className="about_cont_box">
                      <div className="headings_outer ">
                        <h6 className="sub_heading">Our Achievements</h6>
                        <h2 className="common_heading">What we’ve achieved
                        </h2>
                      </div>
                      <p className="about_info">
                        We strive for excellence. Our motivation for every project rests on our desire to deliver the best experience possible through a consistent product line and innovative technologies. Here are some of our many achievements.
  
  
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div className="about_achive_box">
                      <Slider {...settings}>
                        <div>
                          <div className="achive_cont">
                            <img src="/assets/about/favourite.png" alt="" />
                            <h3>Up work</h3>
                            <p className="text-center about_info">
                              5 Start rating Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Ut elit tellus, luctus
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="achive_cont">
                            <img src="/assets/about/favourite.png" alt="" />
                            <h3>Up work</h3>
                            <p className="text-center about_info">
                              5 Start rating Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Ut elit tellus, luctus
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="achive_cont">
                            <img src="/assets/about/favourite.png" alt="" />
                            <h3>Up work</h3>
                            <p className="text-center about_info">
                              5 Start rating Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Ut elit tellus, luctus
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="achive_cont">
                            <img src="/assets/about/favourite.png" alt="" />
                            <h3>Up work</h3>
                            <p className="text-center about_info">
                              5 Start rating Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Ut elit tellus, luctus
                            </p>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="inner_about space ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-xl-3">
                  <div className="about_cont_box">
                    <div className="headings_outer ">
                      <h6 className="sub_heading">Our Team Members</h6>
                      <h2 className="common_heading">Our Creative Team</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="about_cont_box">
                    <p className="about_info">
                      We have a team of talented highly skilled and creative professionals who are looking to get out and make a difference in the world. That is our vision. We aim for growth, not just numbers. Here are some of our many team members.
  
  
                    </p>
                  </div>
                </div>
              </div>
              <div className="team_cont">
                <div className="row ">
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="team_box">
                    <div className="team_head">
                      <div className="team_img">
                        <Link to="#">
                          <img src="/assets/about/1.jpg" alt="" />
                        </Link>
                      </div>
                      <h5 className="team_heading">Harmanpreet Kaur</h5>
                      <p>
                      <span className="sub_head_team">Co-Founder / Partner</span>
                        
                      </p>
                      <p className="emp_quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                      <ul className="team_links">
                          <li><a href=""><i className="fa fa-skype"></i></a></li>
                          <li><a href=""><i className="fa fa-facebook"></i></a></li>
                          <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                     </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="team_box">
                    <div className="team_head">
                      <div className="team_img">
                        <Link to="#">
                          <img src="/assets/about/rakshak.jpg" alt="" />
                        </Link>
                      </div>
                      <h5 className="team_heading">Rakshak Gaind</h5>
                      <p>
                      <span className="sub_head_team">Co-Founder / Partner</span>
                        
                      </p>
                      <p className="emp_quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                       <ul className="team_links">
                          <li><a href=""><i className="fa fa-skype"></i></a></li>
                          <li><a href=""><i className="fa fa-facebook"></i></a></li>
                          <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="team_box">
                    <div className="team_head">
                      <div className="team_img">
                        <Link to="#">
                          <img src="/assets/about/savita.png" alt="" />
                        </Link>
                      </div>
                      <h5 className="team_heading">Savita Rawat</h5>
                      <p>
                      <span className="sub_head_team">Lead Developer</span>
                       
                      </p>
                      <p className="emp_quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                       <ul className="team_links">
                          <li><a href=""><i className="fa fa-skype"></i></a></li>
                          <li><a href=""><i className="fa fa-facebook"></i></a></li>
                          <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default About;
