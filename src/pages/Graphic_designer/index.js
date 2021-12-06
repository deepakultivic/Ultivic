import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from "../../components/Aboutglobal/content";
import Planning from "../../components/Services/Planning";
import Technology from "../../components/Services/Technology";
import pdata from "../../components/Services/pdata";
import Foot from "../../components/Foot";
import "./style.css";
import Techbox from "../../components/Services/Techbox";
import { tbdata } from "../../components/Services/pdata";
function Graphic() {
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
        <Subheader title="Graphic Design" clases="graphic" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
        <Aboutglobal
          imgsrc={content[1].imgsrc}
          about_exp={content[1].about_exp}
          sub_heading={content[1].sub_heading}
          common_heading={content[1].common_heading}
          about_info={content[1].about_info}
        />
        {/* <Technology /> */}
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-5">
                <div className="techn4ology_cont">
                  <div className="headings_outer ">
                    <h6 className="sub_heading placement">Technologies</h6>
                    <h2 className="common_heading">Why you should choose ultivic</h2>
                  </div>
                  <p className="tech_info">
                    Ultivic have a highly skilled team of web developers who have vast knowledge of the technologies that are used in web development whether it’s content management system, custom web software development or any other latest technology. We believe that access to a stellar web development team can be the difference maker that you require for your digital success.
                  </p>
                </div>
              </div>
            <div className="col-md-7">
              <div className="row">
            
                  <Techbox
                    textimgsrc={tbdata[4].textimgsrc}
                    tech_box_heading={tbdata[4].tech_box_heading}
                    tech_box_info={tbdata[4].tech_box_info}
                  />

             
         
                  <Techbox
                    textimgsrc={tbdata[5].textimgsrc}
                    tech_box_heading={tbdata[5].tech_box_heading}
                    tech_box_info={tbdata[5].tech_box_info}
                  />

           
             
                  <Techbox
                    textimgsrc={tbdata[6].textimgsrc}
                    tech_box_heading={tbdata[6].tech_box_heading}
                    tech_box_info={tbdata[6].tech_box_info}
                  />

           
                  <Techbox
                    textimgsrc={tbdata[7].textimgsrc}
                    tech_box_heading={tbdata[7].tech_box_heading}
                    tech_box_info={tbdata[7].tech_box_info}
                  />
            
              </div>
            </div>
          </div>
        </div>
        <Planning
          imgsrc={pdata[0].imgsrc}
          sub_heading={pdata[0].sub_heading}
          common_heading={pdata[0].common_heading}
          planning_info={pdata[0].planning_info}
          planing_pts01={pdata[0].planing_pts01}
          planing_pts02={pdata[0].planing_pts02}
          planing_pts03={pdata[0].planing_pts03}
          planing_pts04={pdata[0].planing_pts04}
          planing_pts05={pdata[0].planing_pts05}
          planing_pts06={pdata[0].planing_pts06}
        />

        {/* <section className="graphics_gallery">
        <div className="container">
          <div className="headings_outer  text-center">
            <h6 className="sub_heading ">Technologies</h6>
            <h2 className="common_heading">Lorem ipsum dolor sit</h2>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="graphics_img mt-5">
                <img src="/assets/services/graphics1.jpg" alt="" />
                <h3>Ecommerce</h3>
              </div>
              <div className="graphics_img">
                <img src="/assets/services/graphics3.jpg" alt="" />
                <h3>Mobile Application</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="graphics_img">
                <img src="/assets/services/graphics2.jpg" alt="" />
                <h3>Fashion</h3>
              </div>
              <div className="graphics_img">
                <img src="/assets/services/graphics4.jpg" alt="" />
                <h3>Blogging</h3>
              </div>
            </div>
            
          </div>
        </div>
      </section> */}
        <Foot />

        <Footer />
      </div>
    );
  }
}

export default Graphic;
