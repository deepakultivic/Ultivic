import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import CountUp from 'react-countup';
import { ourteam } from "../../components/Services/pdata";
import CustomModal from "../../components/Ourteam";
function About(props) {
  const [showModal, setShow] = useState(false);
  const [userdata, setUserdata] = useState({});
  const [teamchunk, setchunk] = useState([]);
  const [teamdata, setTeamdata] = useState(ourteam);
  const makechunks = () => {
    setTeamdata(teamdata.map(n =>({...n})));
    var chunks = [], i = 0, n = teamdata.length;
  while (i < n) {
    chunks.push(teamdata.slice(i, i += 4));
  }
  setchunk(chunks)
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    ],
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
      <Subheader title="About" clases="about" shortdesc="We are Creative And Professional Agency" />
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
               <div className="section-title ml-lg-5">
                 <h6 className="sub_heading placement">About us</h6>
                 <h4 className="title mb-4">
                   We Provide IT solutions <br /> that performs.

                 </h4>
                 <p className="text-muted mb-0">You share your Ideas and We Make It Real. We ensure the true worth of your valuable time and money you invested on us by delivering the perfect solutions that meet client’s needs, expectations and budget.</p>

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
                      <h6 className="sub_heading placement">Our Achievements</h6>
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
        <section className="space">
          <div className="container space">
            <div className="row flex-center sm-no-flex">

              <div className="pull-right sm-no-float col-md-8">
                <ul className="team-members">

                  {teamchunk &&
                    teamchunk.map((emp, index) => {

                      return <>
                        <li className="clearfix" key={"li" + index}>
                          {emp.map((item, ind) => {
                            return <div className="member-details" key={ind} onClick={() => show_model(item)}>
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

                      </>
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
                <div className="team-overview">
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
