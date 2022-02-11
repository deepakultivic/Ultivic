import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

const Jobscontent = () => {
  const[jobs, setJobs] = useState([]);
useEffect(() => {
 function myJobs (){
   
      axios.get('https://ums.ultivic.com/api/development/jobs')
      .then((response)=>{
        const jobs = response.data.data;
        console.log("my jobs",jobs)
        setJobs(jobs)
      })
 }
myJobs();

}, [])
  return (
    <div className="row">
       {
         jobs.map((curelem, i)=>{
           const {title,description,id}= curelem;
           return(
             <div className="col-lg-4 col-md-6  col-xl-4 col-12"  key={i}>
                  <div className="jobs">         
         <div className="job_head">
        <div className="head_content">
        <h3 className="job_heading"> <Link to={`/carrer/${id}`}>{title}</Link>  </h3>
         <p className="location">Mohali</p>
        </div>
        
         </div>
         <p className="job_info">
         {description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 148)}
         </p>
        <div className="global_btn mt-0 ">
        <Link className="" to={`/carrer/${id}`}> View More<i className="fa fa-long-arrow-right"></i></Link>  
        </div>
       </div>
             </div>
           );
         })
       }
    </div>
 )
}

export default Jobscontent;
