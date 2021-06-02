import React from "react";
import {Link} from "react-router-dom";
import './style.css';
function Blogs(props) {
  
  return (
  
      
       
          <div className=" col-lg-4">
            <div className="blog_inner">
              <div className="blog_img">
              <Link to={`/blog/${props.tittle}`}><img src={props.blog_imgs} alt="ultivic blog" /></Link>
              </div>
              <div className="blog_content">
                  <h5>
                   <Link to={`/blog/${props.tittle}`}>{props.tittle}</Link>   
                  </h5>
                <p>
                {props.description}
                </p>
                <div className="blog_btn">
                <Link to={`/blog/${props.tittle}`}>{props.blog_link}</Link>
                </div>
                <p className="date">{props.date}</p>
              </div>
            </div>
          </div>
     
   
  
  );
}

export default Blogs;
