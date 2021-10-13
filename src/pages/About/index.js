import React from "react";
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


function About() {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                  <p className="about_info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
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
                    <span className="counter">100 </span>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="four col-md-3">
                  <div className="counter-box">
                    <span className="counter">500</span>
                    <p>Successful Projects</p>
                  </div>
                </div>
                <div className="four col-md-3">
                  <div className="counter-box">
                    <span className="counter">20</span>
                    <p>Team members</p>
                  </div>
                </div>
                <div className="four col-md-3">
                  <div className="counter-box">
                    <span className="counter">20</span>
                    <p className="animate__animated animate__bounce">
                      Awards wining
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Aboutglobal
          imgsrc={content[0].imgsrc}
          about_exp={content[0].about_exp}
          sub_heading={content[0].sub_heading}
          common_heading={content[0].common_heading}
          about_info={content[0].about_info}
        />

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
                <div className="col-lg-4 col-xl-3 col-md-6">
                  <div className="team_box">
                  <div className="team_head">
                    <div className="team_img">
                      <Link to="#">
                        <img src="/assets/about/1.jpg" alt="" />
                      </Link>
                    </div>
                    <h5 className="team_heading">Harmanpreet Kaur</h5>
                    <a className="mail_text" href="mailto:harmanpreet.kaur@gmail.com">harmanpreet.kaur@gmail.com</a>
                    <ul className="team_links">
                        <li><a href=""><i className="fa fa-skype"></i></a></li>
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                   </div>
                    <p>
                    <span className="sub_head_team">Co-Founder / Partner</span>
                      
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                  <div className="team_box">
                  <div className="team_head">
                    <div className="team_img">
                      <Link to="#">
                        <img src="/assets/about/rakshak.jpg" alt="" />
                      </Link>
                    </div>
                    <h5 className="team_heading">Rakshak Gaind</h5>
                    <a className="mail_text" href="mailto:rakshakgaind02@gmail.com">rakshakgaind02@gmail.com</a>
                     <ul className="team_links">
                        <li><a href=""><i className="fa fa-skype"></i></a></li>
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    </div>
                    <p>
                    <span className="sub_head_team">Co-Founder / Partner</span>
                      
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                  <div className="team_box">
                  <div className="team_head">
                    <div className="team_img">
                      <Link to="#">
                        <img src="/assets/about/savita.png" alt="" />
                      </Link>
                    </div>
                    <h5 className="team_heading">Savita Rawat</h5>
                    <a className="mail_text" href="mailto:savita.rawat@ultivic.com">savita.rawat@ultivic.com</a>
                     <ul className="team_links">
                        <li><a href=""><i className="fa fa-skype"></i></a></li>
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    </div>
                    <p>
                    <span className="sub_head_team">Lead Developer</span>
                     
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                  <div className="team_box">
                   <div className="team_head">
                   <div className="team_img">
                      <Link to="#">
                        <img src="/assets/about/ashish.png" alt="" />
                      </Link>
                    </div>
                    <h5 className="team_heading">Ashish David</h5>
                    <a className="mail_text" href="mailto:ashish.david@ultivic.com">ashish.david@ultivic.com</a>
                     <ul className="team_links">
                        <li><a href=""><i className="fa fa-skype"></i></a></li>
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                   </div>
                    <p>
                    <span className="sub_head_team">Team Lead Mobile</span>
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Foot />
      <Footer />
    </div>
  );
}

export default About;
