import React,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import {Link} from "react-router-dom";
import axios from 'axios';
import './style.css'
function Portfolio() {
const[porfolio, setPortfolio]= useState([]);
useEffect(() => {
function myporfolio(){
axios.get("https://ums.ultivic.com/api/development/portfolios")
.then((response) => {
const portfolio_loop = response.data.data;
setPortfolio(portfolio_loop);
})
}
myporfolio()
}, []);
return (
<div>
   <Header/>
   <Subheader title="Brands we've" sub="helped" img="assets/portfolio/portfolio-banner.jpg" clases="portfolios bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
   <section className=' our_expertise_outer space'>
      <div className="container">
         <div className="row">
            <div className="col-md-4">
               <div className='our_expertise'>
                  <img src="assets/portfolio/graphic-design.svg" alt="" />
                  <div className="expertise_content">
                     <h5>UI Design</h5>
                     <p>Lorem Ipsum is simply text of printing type</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className='our_expertise product_design'>
                  <img src="assets/portfolio/flyer.svg" alt="" />
                  <div className="expertise_content">
                     <h5>Product Design</h5>
                     <p>Lorem Ipsum is simply text of printing type</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className='our_expertise'>
                  <img src="assets/portfolio/ruler.svg" alt="" />
                  <div className="expertise_content">
                     <h5>Branding</h5>
                     <p>Lorem Ipsum is simply text of printing type</p>
                  </div>
               </div>
            </div>
         </div>
         <div className='our_info'>
            <div className='row align-items-center'>
               <div className='col-md-4'>
                  <h3>
                     3
                  </h3>
                  <p className='company_exp'>Years of experience</p>
               </div>
               <div className='col-md-8'>
                  <div className="row">
                     <div className="col-md-6">
                        <div className='our_experience'>
                           <h5>60 +</h5>
                           <p>Clients</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className='our_experience'>
                           <h5>18 +</h5>
                           <p>Employee</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className='our_experience'>
                           <h5>20 +</h5>
                           <p>Completed Projects</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className='our_experience'>
                           <h5>4</h5>
                           <p>Achievements</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='space balck_bg '>
      <div className='container'>
         <div className="portfolio_header mb-5">
            <div>
               <h2>Featured Projects</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
         </div>
         <div className='our_designs'>
            <div className='row'>
               {
               porfolio.map((curelem,index)=>{
               // var index = curelem.images.findIndex(s => s.is_featured == 1);
               // console.log(index)
               // console.log(curelem.images[index].url)
               return( 
               <div className="col-md-6 mb-5">
                  <div className='design_images'>
                     <img src={curelem.images[0].url} alt="" />                                    
                  </div>
                  <h5 className='project_name'>{curelem.name}</h5>
                  <Link to={`portfolio_template/${curelem.slug}`}>
                  Know more</Link>
               </div>
               )
               })
               }
            </div>
         </div>
      </div>
   </section>
   <Footer/>
</div>
)
}
export default Portfolio