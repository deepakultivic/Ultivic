import React,{useState,useEffect} from 'react';
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
            <Subheader title="Web Development" clases="web" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
            <Aboutglobal
                imgsrc={content[2].imgsrc}
                about_exp={content[2].about_exp}
                sub_heading={content[2].sub_heading}
                common_heading={content[2].common_heading}
                about_info={content[2].about_info}
            />
            <Technology />
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
