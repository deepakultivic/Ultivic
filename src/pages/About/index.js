import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content'
import "./style.css";


function About() {
  // const Aboutdata=[
  //   {
  //     imgsrc:"/assets/about/mision.jpg",
  //     about_exp :"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”",
  //     sub_heading:"We are global",
  //     common_heading:"Lorem ipsum sit dolloar",
  //     about_info:"Nulla tincidunt nulla sit amet sem vehicula, nec malesuada nulla lobortis. Mauris imperdiet nulla nec nibh pharetra a molestie. In accumsan elit est a tincidunt dignissim. Vivamus eu dictum lorem. Aenean vulputate sem a ex tempor ultrices. Sed egestas elit sed dapibus ultrices. Pellentesque at libero libero.",

  //   },
  // ];

  return (
    <div>
      <Header />
      <Subheader title="About" clases="about"/>
      <div className="inner_wrap">
        <section className="inner_about space comn_half_bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
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
              <div className="col-md-7">
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
                    <p className="animate__animated animate__bounce">Awards wining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Aboutglobal
         imgsrc={content[0].imgsrc}
         about_exp  = {content[0].about_exp}                  
         sub_heading={content[0].sub_heading}     
         common_heading ={content[0].common_heading}
         about_info={content[0].about_info}
      />

        <section className="inner_about inner_achivement">
          <div className="container">
            <div className="inner_achivement_sec">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="about_cont_box">
                    <div className="headings_outer ">
                      <h6 className="sub_heading">Our Achievements</h6>
                      <h2 className="common_heading">Lorem Ipsum Sit dollar</h2>
                    </div>
                    <p className="about_info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut elit tellus, luctus nec
                      ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="about_achive_box">
                    <div className="row">
                      <div className="col-lg-6 extra_space">
                        <div className="achive_cont">
                          <img src="/assets/about/favourite.png" alt="" />
                          <h3>Up work</h3>
                          <p className="text-center about_info">
                            5 Start rating Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 extra_space">
                        <div className="achive_cont">
                      <img src="/assets/about/favourite.png" alt="" /> 
                          <h3>Up work</h3>
                          <p className="text-center about_info">
                            5 Start rating Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 extra_space">
                        <div className="achive_cont">
                          <img src="/assets/about/favourite.png" alt="" />
                          <h3>Up work</h3>
                          <p className="text-center about_info">
                            5 Start rating Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 extra_space">
                        <div className="achive_cont">
                          <img src="/assets/about/favourite.png" alt="" />
                          <h3>Up work</h3>
                          <p className="text-center about_info">
                            5 Start rating Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="inner_about space ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="about_cont_box">
                  <div className="headings_outer ">
                    <h6 className="sub_heading">Our Team Members</h6>
                    <h2 className="common_heading">Our Creative Team</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="about_cont_box">
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
            </div>
            <div className="team_cont">
              <div className="row ">
                <div className="col-md-4">
                  <div className="team_box">
                    <div className="team_img">
                      <a href="#">
                        <img src="/assets/about/1.jpg" alt="" />
                      </a>
                    </div>
                    <span className="sub_head_team">Co-Founder / Partner</span>
                    <h5 className="team_heading">Harmanpreet Kaur</h5>
                    <p>
                      The creators of the theme are happy with the response and
                      have vowed to create further themes exploring the same
                      concepts
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team_box">
                    <div className="team_img">
                      <a href="#">
                        <img src="/assets/about/rakshak.jpg" alt="" />
                      </a>
                    </div>
                    <span className="sub_head_team">Co-Founder / Partner</span>
                    <h5 className="team_heading">Rakshak Gaind</h5>
                    <p>
                      The creators of the theme are happy with the response and
                      have vowed to create further themes exploring the same
                      concepts
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team_box">
                    <div className="team_img">
                      <a href="#">
                        <img src="/assets/about/harpreet.jpg" alt="" />
                      </a>
                    </div>
                    <span className="sub_head_team">Lead Developer</span>
                    <h5 className="team_heading">Harmanpreet Kaur</h5>
                    <p>
                      The creators of the theme are happy with the response and
                      have vowed to create further themes exploring the same
                      concepts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Foot/>
      <Footer />
    </div>
  );
}

export default About;
