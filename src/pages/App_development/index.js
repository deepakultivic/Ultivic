import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import Technology from '../../components/Services/Technology';
import Foot from "../../components/Foot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

function App_dev() {
    const [loading, setLoading] = useState(true);
    var settings = {
        infinite: true,
        autoplay: false,
    
      };
  
        return (
            <div>
                <Header />
                <Subheader title="App Development" img="assets/services/app-development.png" clases="app_dev bg_overlay" shortdesc="Application development is the process of creating a computer program" />
                <div className="app_dev_inner">
                    <Aboutglobal
                        imgsrc={content[3].imgsrc}
                        about_exp={content[3].about_exp}
                        sub_heading={content[3].sub_heading}
                        common_heading={content[3].common_heading}
                        about_info={content[3].about_info}
                    />
                </div>
                <Technology />
                <section className='our_tech space '>
                    <div className='container-fluid'>
                        <div className='tech_inner'>
                            <div className='row'>
                                <div className='col-xl-6 col-md-6'>
                                    <div className='tech_card android'>
                                        <h4>Android App Development
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, provident. Aliquam voluptas atque non sequi qui deserunt odit nobis harum quisquam recusandae iste et animi odio laudantium, voluptates incidunt sunt.</p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/Kotlin_Icon.png" alt="" />

                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/java.svg" alt="" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-md-6'>
                                    <div className='tech_card ios'>
                                        <h4>iOS App Development
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, provident. Aliquam voluptas atque non sequi qui deserunt odit nobis harum quisquam recusandae iste et animi odio laudantium, voluptates incidunt sunt.</p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/swift.svg" alt="" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/obejctivec.png" alt="" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/rx.png" alt="" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='space app_work pt-0'>
                    <div className="container-fluid">
                        <div className="appwork_inner ">
                        <Slider {...settings}>
                     
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img src="assets/services/fitzu.png" alt="" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img src="/assets/services/fitzulogo.png" alt="" />
                                               </div>
                                                <h3>Fitzu</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi, ipsum libero reiciendis dolorem magnam officia. Eos, dolores non neque earum eveniet in voluptatibus ab odio, unde, itaque debitis aperiam?</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img src="assets/services/loudly.png" alt="" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img src="/assets/home/louble_logo.png" alt="" />
                                               </div>
                                                <h3>Loudly</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi, ipsum libero reiciendis dolorem magnam officia. Eos, dolores non neque earum eveniet in voluptatibus ab odio, unde, itaque debitis aperiam?</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img src="assets/services/downly.png" alt="" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img src="assets/services/downlylogo.png" alt="" />
                                               </div>
                                                <h3>Downly</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi, ipsum libero reiciendis dolorem magnam officia. Eos, dolores non neque earum eveniet in voluptatibus ab odio, unde, itaque debitis aperiam?</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img src="assets/services/compressor.png" alt="" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img src="assets/services/compressorlogo.png" alt="" />
                                               </div>
                                                <h3>Compressor</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi, ipsum libero reiciendis dolorem magnam officia. Eos, dolores non neque earum eveniet in voluptatibus ab odio, unde, itaque debitis aperiam?</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <Foot />
                <Footer />
            </div>
        );
    }


export default App_dev;
