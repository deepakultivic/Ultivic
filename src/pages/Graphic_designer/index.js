import React,{useEffect,useState} from "react";
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
        return   <div className="w-100 text-center my_loader">
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
    else{
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
      <Technology />
     <section className="space">
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
     </section>
      <section className="graphics_gallery">
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
      </section>
      <Foot />

      <Footer />
    </div>
  );
}
}

export default Graphic;
