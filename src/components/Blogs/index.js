import React from "react";
import {Link} from "react-router-dom";
import './style.css';
function Blogs(props) {
  
  return (
  
      
       
          <div className=" col-lg-4">
            <div className="blog_inner">
              <div className="blog_img">
                <a href="#"><img src={props.blog_imgs} alt="ultivic blog" /></a>
              </div>
              <div className="blog_content">
                  <h5>
                   <Link to={`/blog/${props.tittle}`}>{props.tittle}</Link>   
                  </h5>
                <p>
                {props.description}
                </p>
                <div className="blog_btn">
                    <a href="">{props.blog_link}</a>
                </div>
                <p className="date">{props.date}</p>
              </div>
            </div>
          </div>
     
   
  
  );
}

export default Blogs;
