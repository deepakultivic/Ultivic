import React from 'react'
import jobsarr from './jobsarr'
import {Link} from "react-router-dom";
function jobscontent(props) {
    return (
        <div className="jobs">
            <div className="job_img">
              <img src={props.imgurl} alt="" />
            </div>
            <h3 className="job_heading"> <Link to={`/carrer/${props.jobTitle}`}>{props.jobTitle}</Link>  </h3>
            <Link to={`/carrer/${props.jobTitle}`}> {props.joblink
            }<i className="fa fa-long-arrow-right"></i></Link>  
          </div>
    )
}

export default jobscontent
