import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import { Link } from "react-router-dom";
import axios from 'axios';
import './style.css'
function Portfolio() {
   const [porfolio, setPortfolio] = useState([]);
   useEffect(() => {
      function myporfolio() {
         axios.get("https://ums.ultivic.com/api/development/portfolios")
            .then((response) => {
               const portfolio_loop = response.data.data;
               console.log(portfolio_loop);
               setPortfolio(portfolio_loop);
            })
      }
      myporfolio()
   }, []);
   return (
      <div>
         <Header />
         <Subheader title="Brands we've" sub="helped" img="assets/portfolio/portfolio-banner.jpg" clases="portfolios bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
     
         <section className='space balck_bg '>
            <div className='container'>
               <div className="portfolio_header mb-5">
                  <div>
                     <h2>Featured Projects</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                  </div>
               </div>
               <div className='our_designs'>
              
                  <div className="row">
                     <div className="col-md-6 mb-5">
                        <div className="design_images"><img src="/assets/portfolio/geyserapp.png" alt="" /></div>
                        <h5 className="project_name">Geyser App</h5>
                        <a href="/portfolio_template/geyser-app">Know more</a>
                     </div>
                     <div className="col-md-6 mb-5">
                     <div className="design_images"><img src="/assets/portfolio/fitzu.png" alt="" /></div>
                        <h5 className="project_name">Fitzu</h5>
                        <a href="/portfolio_template/fitzu">Know more</a>
                     </div>
                     <div className="col-md-6 mb-5">
                     <div className="design_images"><img src="/assets/portfolio/intellthing.png" alt="" /></div>
                        <h5 className="project_name">Intellithing</h5>
                        <a href="/portfolio_template/xlsx-file-reader">Know more</a>
                     </div>
                     <div className="col-md-6 mb-5">
                     <div className="design_images"><img src="/assets/portfolio/imaginze.png" alt="" /></div>
                        <h5 className="project_name">imaginze</h5>
                        <a href="/portfolio_template/imaginze">Know more</a>
                     </div>
                     <div className="col-md-6 mb-5">
                        <div className="design_images"><img src="/assets/portfolio/graphics-04.png" alt="" /></div>
                        <h5 className="project_name">CarBuyers</h5>
                        <a href="/portfolio_template/carbuyers">Know more</a>
                     </div>
                    
                     <div className="col-md-6 mb-5">
                        <div className="design_images"><img src="/assets/portfolio/xlsx.png" alt="" /></div>
                        <h5 className="project_name">Xlsx File Reader</h5>
                        <a href="/portfolio_template/xlsx-file-reader">Know more</a>
                     </div>
                    
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </div>
   )
}
export default Portfolio