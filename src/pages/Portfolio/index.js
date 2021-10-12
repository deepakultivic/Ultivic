import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import Foot from '../../components/Foot'
import Aboutglobal from '../../components/Aboutglobal'
import content from '../../components/Aboutglobal/content'
import Filter from '../../components/Filter'
import SimpleReactLightbox from 'simple-react-lightbox'
import './style.css'
function Portfolio() {
    return (
        <div>
            <Header/>
            <Subheader title="Portfolio" clases="portfolios" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
            <Aboutglobal
         imgsrc={content[0].imgsrc}
         about_exp  = {content[0].about_exp}                  
         sub_heading={content[0].sub_heading}     
         common_heading ={content[0].common_heading}
         about_info={content[0].about_info}
      />
       <SimpleReactLightbox><Filter/></SimpleReactLightbox>
            
            <Foot/>
           
            <Footer/>
        </div>
    )
}

export default Portfolio
