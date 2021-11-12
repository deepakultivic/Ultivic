import React,{useState,useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import pdata from '../../components/Services/pdata';
import Planning from '../../components/Services/Planning';
import Foot from "../../components/Foot";
import Gallery from '../../components/Services/Gallery';
import {gridgallery} from "../../components/Services/pdata";
import SimpleReactLightbox from 'simple-react-lightbox'
import "./style.css";

function App_dev() {
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
            <Subheader title="App Development" clases="app_dev" shortdesc="Application development is the process of creating a computer program"/>
           <div className="app_dev_inner">
           <Aboutglobal
                imgsrc={content[3].imgsrc}
                about_exp={content[3].about_exp}
                sub_heading={content[3].sub_heading}
                common_heading={content[3].common_heading}
                about_info={content[3].about_info}
            />
           </div>
            <Planning
            imgsrc={pdata[1].imgsrc}
            sub_heading={pdata[1].sub_heading}
            common_heading={pdata[1].common_heading}
            planning_info={pdata[1].planning_info}
            planing_pts01={pdata[1].planing_pts01}
            planing_pts02={pdata[1].planing_pts02}
            planing_pts03={pdata[1].planing_pts03}
            planing_pts04={pdata[1].planing_pts04}
            planing_pts05={pdata[1].planing_pts05}
            planing_pts06={pdata[1].planing_pts06}
            />
            <Planning
            clases={pdata[2].clases}
            imgsrc={pdata[2].imgsrc}
            sub_heading={pdata[2].sub_heading}
            common_heading={pdata[2].common_heading}
            planning_info={pdata[2].planning_info}
            planing_pts01={pdata[2].planing_pts01}
            planing_pts02={pdata[2].planing_pts02}
            planing_pts03={pdata[2].planing_pts03}
            planing_pts04={pdata[2].planing_pts04}
            planing_pts05={pdata[2].planing_pts05}
            planing_pts06={pdata[2].planing_pts06}
            />
             <SimpleReactLightbox>     <Gallery gallery={gridgallery}
                />   </SimpleReactLightbox>
            <Foot/>
            <Footer />
        </div>
    );
}
}

export default App_dev;
