import React ,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Foot from "../../components/Foot";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./style.css";
import { portfolio } from '../../pages/Portfolio/projectjson';

const Projects = () => {
   const title=useParams();
   // console.log('title------',portfolio)
   const [portfolio_data,setPortfolio_data]=useState([]);
   useEffect(()=>{
      if(title.title!==null){         
         setPortfolio_data(portfolio.filter(curEmp=>curEmp.title===title.title));
      }
  },[])

var settings = {  
dots: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
arrow: true,
responsive: [{
breakpoint: 767,
settings: {
dots: false,
arrow: true,
slidesToShow: 1,

}
}]
};
return (
<>
{portfolio_data &&
   portfolio_data.map((curResult)=>{
      return(
         <div>
         <Header />
         <Subheader title={curResult?.title_header} sub={curResult?.subTitle_header} img={curResult?.banner} clases="portfolios bg_overlay" shortdesc="We Promise That Recruiting The Perfect " />
         <section className='space balck_bg'>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <div className="about_project_image">
                        <img src={curResult?.about_image}></img>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className='paragraph'>
                        <h6>About</h6>
                       
                        <h5>{curResult?.about_paragraph}
                        </h5>
                        <p>{curResult?.paragraph}
                        </p>

                        <div className='global_btn text-left mt-3'>
                      
                         {curResult?.button !== "" ?
                          <a href={curResult?.button} target='_blank' class='btn  brn-sm '> Visit <i class='fa fa-long-arrow-right'></i></a>
                          : ""}
            
                        </div>
                     </div>
                  </div>
               </div> 
            </div>
            </section>
      {/* section ends here */}
      
            <div className='projects_background space'>
               <div className='projects_text'>
                  <div className='text-center'>
                     <h6>Project</h6>
                     <h3 className='mt-2 mb-2'>Project Details </h3>
                     <p>We Promise That Recruiting The Perfect People Is Our Pride And Joy
                     </p>
                  </div>
               </div>
               <div className='projects_carousals'>
                  <div className='container'>
                  <div className="slide">

                     <Slider {...settings}>
                   {  curResult?.carousel_images.map((curelem,index)=>{
                        return(
                           <div key={index}>
                           <img src={curelem}></img>
                        </div>
                        )
                   })}
                     
                     </Slider>
                  </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className='space'>
                  <div className="projects_para_image">
                     <div className="row align-items-center">
                        <div className="col-md-6">
                           <div className='projects_paragraph'>
                              <h6>{curResult?.last_title}</h6>
                              {/* <h3>Lorem Ipsum</h3> */}
                              <h5>{portfolio_data[0]?.bold_paragraph}
                              </h5>
                              <p>{portfolio_data[0]?.last_paragraph}
                              </p>
                             
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="para_image">
                              <img src={curResult?.last_image}></img>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
          </div>
        
         <Foot />
         <Footer />
      </div>
      )
   })
}   
</>
)}

export default Projects;