import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import Technology from '../../components/Services/Technology';
import Foot from "../../components/Foot";
import "./style.css";
import Gallery from '../../components/Services/Gallery';
import { gridgallery } from "../../components/Services/pdata";
import SimpleReactLightbox from 'simple-react-lightbox'
function Web() {
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
    return (
      <div>
        <Header />
        <Subheader title="Web Development" clases="web" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
        {/* <Aboutglobal
          imgsrc={content[2].imgsrc}
          about_exp={content[2].about_exp}
          sub_heading={content[2].sub_heading}
          common_heading={content[2].common_heading}
          about_info={content[2].about_info}
        /> */}
        <section className="space service_about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="assets/home/web_about.png" alt="" />
              </div>
              <div class="col-lg-6 col-md-6 col-12 ">
                <div class="section-title ml-lg-5">
                  <h6 className="sub_heading placement">Web Development
                  </h6>
                  <h4 class="title mb-2">
                    What is Web Development ?

                  </h4>
                  <p class="text-muted mb-0">Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are performing and the platforms on which they are working.</p>
                  <h5 className="my-3">
                    Our Technologies
                  </h5>
                  {/* <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae voluptate incidunt</p> */}
                  <ul className="p-0 tech_icons" >
                    <li><img src="assets/home/php.svg" alt="" /></li>
                    <li><img src="assets/home/java.svg" alt="" /></li>
                    <li><img src="assets/home/android.svg" alt="" /></li>
                    <li><img src="assets/home/js.svg" alt="" /></li>
                    <li><img src="assets/home/html-5.svg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
<section className="why_choose space">
<div className="container">
        <h6 class="sub_heading placement">Why Choose</h6>
        <h4 class="title mb-5">Our experts made it easier</h4>
        <div className='row'>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/web-design.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4>Excelent Frontend</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/coding.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4>Solid back-End</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/maintenance.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4> Regulation and Maintenace </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='why_choose_card'>
                  <div className='why_icon'>
                      <img src="assets/about/test.svg" alt="" />
                  </div>
                  <div className='why_card_content'>
                  <h4> Full cycle testing and delivery </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  </div>
                </div>
            </div>
            <div className='col-md-8'>
              <div className='why_contact why_choose_card align-items-center'>
                  <h3>Get in Touch</h3>
                  <p className='ml-auto'><a href="/contact">Know More</a></p>
              </div>
            </div>
        </div>
</div>
</section>
        <SimpleReactLightbox>
          <Gallery gallery={gridgallery} />
        </SimpleReactLightbox>
        <Foot />
        <Footer />
      </div>
    )
  }
}
export default Web;
