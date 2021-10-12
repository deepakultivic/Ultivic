import React,{useState} from 'react'
import jobsarr from './jobsarr'
import {Link} from "react-router-dom";

const Jobscontent = () => {
  const[jobs, setJobs] = useState(jobsarr);
  return (
    <div className="row">
       {
         jobs.map((curelem, i)=>{
           const {imgurl,jobTitle,joblink,joblocation,jobdescription,updatedtime}= curelem;
           return(
             <div className="col-lg-4 col-md-6 col-xl-4 col-12"  key={i}>
                  <div className="jobs">         
         <div className="job_head">
        <div className="head_content">
        <h3 className="job_heading"> <Link to={`/carrer/${jobTitle}`}>{jobTitle}</Link>  </h3>
         <p className="location">{joblocation}</p>
        </div>
        
         </div>
         <p className="job_info">
         {jobdescription}
         </p>
        <div className="global_btn mt-0 ">
        <Link className="" to={`/carrer/${jobTitle}`}> {joblink}<i className="fa fa-long-arrow-right"></i></Link>  
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
