import React,{useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import Filter from '../../components/Filter'
import SimpleReactLightbox from 'simple-react-lightbox'
import './style.css'
function Portfolio() {
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
            <Header/>
            <Subheader title="Brands we've" sub="helped" clases="portfolios bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
      
       <SimpleReactLightbox><Filter/></SimpleReactLightbox>
            
   
           
            <Footer/>
        </div>
    )
}
}

export default Portfolio
