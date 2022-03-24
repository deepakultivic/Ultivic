import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import Filter from '../../components/Filter'
import SimpleReactLightbox from 'simple-react-lightbox'
import './style.css'
function Portfolio() {
 
    return (
        <div>
            <Header/>
            <Subheader title="Brands we've" sub="helped" img="assets/portfolio/portfolio-banner.jpg" clases="portfolios bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
      
       <SimpleReactLightbox><Filter/></SimpleReactLightbox>
            
   
           
            <Footer/>
        </div>
    )
}


export default Portfolio
