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
  const [loading, setLoading] = useState(true);
  const [userdata, setUserdata] = useState({});
  const [teamchunk, setchunk] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  arrows:false,
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
let chunk;
let allchunk=[];
    while (ourteam.length > 0) {

      chunk = ourteam.splice(0,4)
      allchunk.push(chunk)
    
    }
    setchunk(allchunk)
  }, [])


function show_model(data){
  setShow(true)
  setUserdata(data)
  console.log(teamchunk)
}

  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
    return <div className="w-100 text-center my_loader">
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
  else {
    let loopindex=0;
    return (
      <div>
        <Header />
        <Subheader title="About" clases="about" shortdesc="We are Creative And Professional Agency" />
        <div className="inner_wrap">
          <section className="inner_about space ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="about_cont_box">
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
					
						{ teamchunk && 
            teamchunk.map((emp, index)=>{
             
              return <>
               <li className="clearfix" key={"li"+index}>
{emp.map((item, ind)=>{
return     <div className="member-details" key={ind} onClick={()=>show_model(item)}>
<div>
  <img src={item.emp_image} alt="UI Designer"/>
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
                                           setShow={setShow}/> : <></>
                    }
      
			<div className="pull-left col-md-4 sm-text-center">
				<div className="team-overview">
        <h6 className="sub_heading placement">Who we are</h6>
					<h5>Meet the Entire Team</h5>
					<p><div>At Ultivic we are driven by shared standard of excellence, guided by the same integrity, and motivated by a common ambition to achieve our goals.</div></p>
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
