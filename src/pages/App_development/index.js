import React, { useState } from 'react';
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
                <Subheader title="App Development" img="assets/services/app-development.jpg" clases="app_dev bg_overlay" shortdesc="We believe in creativity" />
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
                                   <div className='cardouter'>
                                   <div className='tech_card android'>
                                        <h4>Android App Development
                                        </h4>
                                        <p>Android, the open-source platform for smartphones and tablets, is engendering zest across the mobile space. The operating system is open-source, based on Linux and is compatible with a JAVA Library. It was developed by Google and the Open Handset Alliance. Moreover, Android provides an efficient open market place and an excellent opportunity for third party android app developers. </p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img width={"100"} height={"100"} src="assets/home/Kotlin_Icon.png" alt="ultivic image" />

                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img width={"100"} height={"100"} src="assets/home/java.svg" alt="ultivic image" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                   </div>
                                </div>
                                <div className='col-xl-6 col-md-6'>
                                   <div className='cardouter'>
                                   <div className='tech_card ios'>
                                        <h4>iOS App Development
                                        </h4>
                                        <p>iOS application development is the process of making mobile applications for Apple hardware, including iPhone, iPad and iPod Touch. The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download.</p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img width={"100"} height={"100"} src="assets/home/swift.svg" alt="ultivic image" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img width={"100"} height={"100"} src="assets/home/obejctivec.png" alt="ultivic image" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img width={"100"} height={"100"} src="assets/home/rx.png" alt="ultivic image" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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
                                        <img width={"100"} height={"100"} src="assets/services/fitzu.png" alt="ultivic image" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img width={"100"} height={"100"} src="/assets/services/fitzulogo.png" alt="ultivic image" />
                                               </div>
                                                <h3>Fitzu</h3>
                                                <p>Fitzu unlocks the best sporting specialists and trainers in your area at the click of a button. Find a specialist across personal training, pilates, yoga, crossfit, weight loss & diet, martial arts, dancing, football, rugby, surfing, swimming, tennis and more! </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img width={"100"} height={"100"} src="assets/services/loudly.png" alt="ultivic image" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img width={"100"} height={"100"} src="/assets/home/louble_logo.png" alt="ultivic image" />
                                               </div>
                                                <h3>Loudly</h3>
                                                <p>Tune into better volumes with the new volume booster free app. Volume booster “Loud Volume Booster for Speakers” works as a sound amplifier and headphone volume booster designed to boost volume by increasing loudness of video, audio or all notifications on Android.</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img width={"100"} height={"100"} src="assets/services/downly.png" alt="ultivic image" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img width={"100"} height={"100"} src="assets/services/downlylogo.png" alt="ultivic image" />
                                               </div>
                                                <h3>Downly</h3>
                                                <p>After your video created and published on TikTok, you only need to copy your TikTok video link and open SnapTik, the download task will start automatically, and easily save your Tiktok video to your Android phone</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='app_card'>
                                <div className='row align-items-center'>
                                    <div className="col-md-6">
                                        <img width={"100"} height={"100"} src="assets/services/compressor.png" alt="ultivic image" />
                                    </div>
                                    <div className='col-md-6'>
                                            <div className='app_text'>
                                               <div className='app_logo'>
                                               <img width={"100"} height={"100"} src="assets/services/compressorlogo.png" alt="ultivic image" />
                                               </div>
                                                <h3>Compressor</h3>
                                                <p>You can reduce image size by optimizing photo quality, photo resize, convert image file format. Also, we are providing a powerful video compression feature where you can do video compression by controlling video bitrate, video quality, and video resolution.</p>
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
