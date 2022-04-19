import React,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer'
import './style.css';
import axios from 'axios';
const Portfolio_template = () => {
const[porfolio_view, setPortfolio_view]= useState('');
var { slug } = useParams();
console.log('my slug',slug)
useEffect(() => {
function myporfolio_view(){
axios.get("https://ums.ultivic.com/api/development/portfolio/"+slug,{
params:{
slug:slug
}
})      
.then((response) => {
console.log("my response ", response)
const portfolio_loop = response.data.data;
console.log("my response inner data", portfolio_loop)
setPortfolio_view(portfolio_loop);
})
}
myporfolio_view()
}, [slug])
function getIsFeaturedImg(Array,isFeaturedValue){
console.log("qwjkbvdjhw");
let Obj= Array.filter(curEl=>curEl.is_featured===isFeaturedValue);
console.log("filtered image",Obj);
return Obj;
}
return (
<>
<Header />
<section className='protfoli_banner'>
   <div className='container space'>
      <div className='row align-items-center'>
         <div className="col-md-5">
            <div className='app_image'>        
               {porfolio_view.images &&
               getIsFeaturedImg(porfolio_view.images,1).map((curEl)=>{
               return(
               <img src={curEl.url} alt="" />
               )
               })
               }
            </div>
         </div>
         <div className="col-md-7">
            <h6 className='sub_heading placement'>{porfolio_view.technology}</h6>
            <h4 className='title mb-4 text-white'>{porfolio_view.name}</h4>
            <p className='text-white'>{porfolio_view.small_description} </p>
         </div>
      </div>
   </div>
</section>
<section className='about_app space' >
   <div className='container'>
      <div className="row ">
         <div className="col-md-6">
            <h6 className='sub_heading placement'>About</h6>
            <h4 className='title mb-4'>{porfolio_view.name}</h4>
            <p className=''>{porfolio_view.description}  </p>
         </div>
         <div className="col-md-6">
            <div className='app_image'>
               {porfolio_view.images &&
               getIsFeaturedImg(porfolio_view.images,0).map((curEl)=>{
               return(
               <img src={curEl.url} alt="" />
               )
               })
               }
            </div>
         </div>
      </div>
   </div>
</section>
{/* {porfolio_view.itune_link == null ? <>
<p>testing</p>
</>  : <>
<p>my testing</p>
</>}
{porfolio_view.itune_link == null ? <>
<p>testing</p>
</>  : <>
<p>my testing</p>
</>}
{porfolio_view.itune_link == null ? <>
<p>testing</p>
</>  : <>
<p>my testing</p>
</>} */}
<section className='space app_info'>
   <div className='container space'>
      <div className='row align-items-center'>
         <div className='col-md-4'>
            <h3>
               Download Now
            </h3>
            <p className='company_exp'>Years of experience</p>
         </div>
         <div className='col-md-8'>
            <div className="row">
               <div className="col-md-6">
                  <div className='our_experience text-center'>
                     <h5>{porfolio_view.downloads}+</h5>
                     <p>Downloads</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className='our_experience text-center'>
                     <h5>{porfolio_view.technology}</h5>
                     <p>App</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className='our_experience text-center'>
                     <h5>{porfolio_view.size}MB</h5>
                     <p>Size</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className='our_experience text-center'>
                     <h5>{porfolio_view.rating}+</h5>
                     <p>Rating</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<Footer />
</>
)
}
export default Portfolio_template