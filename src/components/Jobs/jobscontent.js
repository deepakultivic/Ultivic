import React from 'react'
import jobsarr from './jobsarr'
function jobscontent(props) {
    return (
        <div className="jobs">
            <div className="job_img">
              <img src={props.imgurl} alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">{props.jobTitle}</a> </h3>
            <a href="#"> {props.joblink
            }<i className="fa fa-long-arrow-right"></i></a>
          </div>
    )
}

export default jobscontent
