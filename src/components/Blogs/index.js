import React from "react";
import { Link } from "react-router-dom";
import './style.css';
function Blogs({ blogs }) {
  return (
    blogs.map((item, index) => {
      return (
        <div className=" col-lg-4" key={index}>
          <div className="blog_inner">
            <div className="blog_img">
              <Link to={`/blog/${item.tittle}`}><img src={item.blog_imgs} alt="ultivic blog" /></Link>
            </div>
            <div className="blog_content">
              <h5>
                <Link to={`/blog/${item.tittle}`}>{item.tittle}</Link>
              </h5>
              <p>
                {item.description}
              </p>
              <div className="blog_btn">
                <Link to={`/blog/${item.tittle}`}>{item.blog_link}</Link>
              </div>
              <p className="date">{item.date}</p>
            </div>
          </div>
        </div>
      )
    })






  )
}

export default Blogs;
