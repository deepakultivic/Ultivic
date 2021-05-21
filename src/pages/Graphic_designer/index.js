import React from "react";
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

function Graphic() {
  return (
    <div>
      <Header />
      <Subheader title="Graphic Design" clases="graphic" />
      <Aboutglobal
        imgsrc={content[1].imgsrc}
        about_exp={content[1].about_exp}
        sub_heading={content[1].sub_heading}
        common_heading={content[1].common_heading}
        about_info={content[1].about_info}
      />
      <Technology />
      <Planning
        imgsrc={pdata[0].imgsrc}
        sub_heading={pdata[0].sub_heading}
        common_heading={pdata[0].common_heading}
        planning_info={pdata[0].planning_info}
        planing_pts01={pdata[0].planing_pts01}
        planing_pts02={pdata[0].planing_pts02}
        planing_pts03={pdata[0].planing_pts03}
        planing_pts04={pdata[0].planing_pts04}
      />
      <section className="graphics_gallery">
        <div className="container">
          <div class="headings_outer  text-center">
            <h6 class="sub_heading ">Technologies</h6>
            <h2 class="common_heading">Lorem ipsum dolor sit</h2>
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
      </section>
      <Foot />

      <Footer />
    </div>
  );
}

export default Graphic;
