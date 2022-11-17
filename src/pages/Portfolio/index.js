import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import { Link } from "react-router-dom";

import axios from 'axios';
import './style.css'
import Filter from './filter';
function Portfolio() {
   const [portfolio, setPortfolio] = useState([]);
  

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
         <Subheader title="Our Recent" sub="Work" img="assets/portfolio/recentWork-banner.png" clases="portfolios bg_overlay" shortdesc="We Promise That Recruiting The Perfect " />
     
         <section className='space balck_bg '>
            <div className="portfolio_header mb-3">
            <h2>Portfolio</h2>
            <p>We Promise That Recruiting The Perfect People Is our Pride and joy</p>
            </div>      
            <Filter/>
   
         </section>
         <Footer />
      </div>
   )
}
export default Portfolio