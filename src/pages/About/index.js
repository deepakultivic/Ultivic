import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import CountUp from 'react-countup';
import { ourteam } from "../../components/Services/pdata";
import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrow: true,
    responsive: [
      {
        breakpoint: 767,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 1199,

        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        }
      },
      {
        breakpoint: 991,

        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true,
        }
      },
    ]
  };
  return (
    <div>
      <Header />
      <BackgroundImage
        src="assets/about/Ultivic_about.jpg"
        isResponsive
        className="image about bg_overlay"
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

                          <img width={"100%"} height={"auto"} src="./assets/home/about-01.jpg" className="img-fluid" alt="Image" />

                          <div className="img-overlay bg-dark">

                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mt-0 pt-2 text-right">
                          <div className="global_btn"><a href="/contact">Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card work-desk rounded  shadow-lg overflow-hidden">
                          <img width={"100%"} height={"auto"} src="./assets/home/about-02.jpg" className="img-fluid" alt="Image" />
                          <div className="img-overlay bg-dark"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-desk rounded  shadow-lg overflow-hidden">
                          <img width={"100%"} height={"auto"} src="./assets/home/about-03.jpg" className="img-fluid" alt="Image" />
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
                  <p className="mb-0">Share your idea and we make it Real. We ensure great customer service means following best practices like valuing customers' time, and resources and having pleasing attitude.</p>

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
        <section className="about_counter space mb-5">
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
                      Awards winning
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
                      // console.log(teamchunk)
                      return <div key={index}>
                        <li className="clearfix" key={"li" + index}>
                          {emp.map((item, index) => {
                            return <div className="member-details" key={index} >
                              <div>
                                <Link to={`/employee/${item.emp_name}`}> <img width={"100%"} height={"auto"} src={item.emp_image} alt="UI Designer" />
                                  <div className="member-info">
                                    <h3>{item.emp_name}</h3>
                                    <p>{item.emp_designation}</p>
                                  </div></Link>
                              </div>
                            </div>
                          })}
                        </li>
                      </div>
                    })}
                </ul>
              </div>
              <div className="pull-left col-md-4 sm-text-center">
                <div className="team-overview mobile_space">
                  <h6 className="sub_heading placement">Who we are</h6>
                  <h5>Meet our Team</h5>
                  <p><span>At Ultivic we are driven by shared standard of excellence, guided by the same integrity, and motivated by a common ambition to achieve our goals.</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg_black gallery space">
          <div className="container">
            <div className="gradient_circle"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="gallery_text">
                  <h2 className=" mb-3">Memories that last</h2>
                  <p className="text-white mb-4">One of the best ways to make yourself happy in the present is to recall happy times from the past. Photos are a great memory-prompt, and because we tend to take photos of happy occasions, they weigh our memories to the good.</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="grid-container">
                  <div className="column">
                    <Slider {...settings}>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_1.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_2.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_3.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_4.jpeg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_5.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_6.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_7.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_8.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_9.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_10.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_11.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_12.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_13.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_14.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_15.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_16.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_17.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_18.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_19.jpg" />
                      </div>
                      <div className="about_gallery">
                        <img src="/assets/about/ultivic_20.jpg" />
                      </div>
                    </Slider>
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


export default About;
