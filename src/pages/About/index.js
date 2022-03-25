import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import CountUp from 'react-countup';
import { ourteam } from "../../components/Services/pdata";
import CustomModal from "../../components/Ourteam";
import { BackgroundImage } from "react-image-and-background-image-fade";


function About(props) {
  const [showModal, setShow] = useState(false);
  const [userdata, setUserdata] = useState({});
  const [teamchunk, setchunk] = useState([]);
  const [teamdata, setTeamdata] = useState(ourteam);

  const headerRef = useRef(null);

  const makechunks = () => {

    setTeamdata(teamdata.map(n => ({ ...n })));
    var chunks = [], i = 0, n = teamdata.length;
    while (i < n) {
      chunks.push(teamdata.slice(i, i += 4));
    }
    setchunk(chunks)
  };


  useEffect(() => {

    makechunks()
  }, [])


  function show_model(data) {
    setShow(true)
    setUserdata(data)
    console.log(teamchunk)
  }


  let loopindex = 0;
  return (
    <div>
      <Header />
      <BackgroundImage
        src="assets/about/Ultivic_about.jpg"

        isResponsive
        className="image about bg_overlay"
        transitionTime=".2s"
        lazyLoad
      >
        <section className="about bg_overlay">
          <div className="container">
            <div className="subhead_outer">
              <div className="right_align">
                <div className="right_align_inner">
                  <h2 className="subhead">
                    About <span>Us</span>
                  </h2>
                  <p>We are Creative And Professional Agency</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <div className="inner_wrap">
        <section className="home_about space">

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-01.png" className="img-fluid" alt="Image" />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mt-0 pt-2 text-right">
                          <div className="global_btn"><a href="/about">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-02.png" className="img-fluid" alt="Image" />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-desk rounded  shadow-lg overflow-hidden">
                          <img src="./assets/home/about-03.png" className="img-fluid" alt="Image" />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                <div className="section-title ml-lg-5" ref={headerRef} >
                  <h6 className="sub_heading placement">About us</h6>
                  <h4 className="title mb-4">
                    We Provide IT solutions <br /> that performs.

                  </h4>
                  <p className="mb-0">Share your idea and we make it Real. We ensure great customer service means following best practices like valuing customer's time, resources and having pleasing attitude.</p>

                  <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center p-2">
                        <i className="fa fa-lightbulb-o h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0"><a className="text-dark">Creative Ideas</a></h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center p-2">
                        <i className="fa fa-users h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0"><a className="text-dark">Team Work</a></h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center p-2">
                        <i className="fa fa-building-o h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0"><a className="text-dark">Work Strategy</a></h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="media align-items-center rounded shadow p-2">
                        <i className="fa fa-cubes h4 mb-0 text-custom"></i>
                        <h6 className="ml-3 mb-0"><a className="text-dark">Client Handling</a></h6>
                      </div>
                    </div>
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
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="four col-md-3">
                  <div className="counter-box">
                    <span className="counter"><CountUp start={0} end={50} duration={2.75} delay={0}>
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
                    <span className="counter"> <CountUp start={0} end={20} duration={2.75} delay={0}>
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
        <section className="space out_team_section">
          <div className="container space">
            <div className="row flex-center sm-no-flex">
              <div className="pull-right sm-no-float col-md-8 col-12">
                <ul className="team-members">

                  {teamchunk &&
                    teamchunk.map((emp, index) => {

                      return <div key={index}>

                        <li className="clearfix" key={"li" + index}>
                          {emp.map((item, index) => {
                            return <div className="member-details" key={index} onClick={() => show_model(item)}>
                              <div>
                                <img src={item.emp_image} alt="UI Designer" />
                                <div className="member-info">
                                  <h3>{item.emp_name}</h3>
                                  <p>{item.emp_designation}</p>
                                </div>
                              </div>
                            </div>
                          })}
                        </li>
                      </div>
                    })}
                </ul>
              </div>
              {showModal ?
                <CustomModal title={"Employee"}
                  body={userdata}
                  show={showModal}
                  setShow={setShow} /> : <></>
              }

              <div className="pull-left col-md-4 sm-text-center">
                <div className="team-overview mobile_space">
                  <h6 className="sub_heading placement">Who we are</h6>
                  <h5>Meet the Entire Team</h5>
                  <p><span>At Ultivic we are driven by shared standard of excellence, guided by the same integrity, and motivated by a common ambition to achieve our goals.</span></p>
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


export default About;
