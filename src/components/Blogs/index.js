import React from "react";
import './style.css';
function Blogs() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="blog_inner">
              <div className="blog_img">
                <a href="#"><img src="/assets/home/blog-1.jpg" alt="ultivic blog" /></a>
              </div>
              <div className="blog_content">
                  <h5>
                      <a href="#">A wonderful serenity Loreum</a>
                  </h5>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed Craft beer elit...
                </p>
                <div className="blog_btn">
                    <a href="">Continue reading</a>
                </div>
                <p className="date">APRIL 9, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_inner">
              <div className="blog_img">
                <a href="#"><img src="/assets/home/blog-1.jpg" alt="ultivic blog" /></a>
              </div>
              <div className="blog_content">
                  <h5>
                      <a href="#">A wonderful serenity Loreum</a>
                  </h5>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed Craft beer elit...
                </p>
                <div className="blog_btn">
                    <a href="">Continue reading</a>
                </div>
                <p className="date">APRIL 9, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_inner">
              <div className="blog_img">
                <a href="#"><img src="/assets/home/blog-1.jpg" alt="ultivic blog" /></a>
              </div>
              <div className="blog_content">
                  <h5>
                      <a href="#">A wonderful serenity Loreum</a>
                  </h5>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed Craft beer elit...
                </p>
                <div className="blog_btn">
                    <a href="">Continue reading</a>
                </div>
                <p className="date">APRIL 9, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="global_btn">
            <a href="cm-btn">
              View All <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Blogs;
