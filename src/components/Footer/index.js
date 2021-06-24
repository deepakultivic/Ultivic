import React from 'react';
import { Link } from 'react-router-dom'
import blogdata from '../Blogs/blogdata';
import "./style.css";

function Footer() {

  return (
    <div className="footer">
      <div className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_box">
            <Link to="/" className="footer_logo">
              <img src="/assets/header/logo-white.png" height="100" alt="CoolBrand" />
            </Link>
            <p className="comp_info">Share your IDEA and We Will Make It Real”. We ensure true worth of your valuable time and money you invested on us by delivering the perfect product</p>
            <ul className="footer_icons">
              <li><Link to="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link></li>
              <li><Link to="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></Link></li>
              <li><Link to="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></Link></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_box">
                <h5 className="footer_heading">Recent Posts</h5>
                <ul className="rent_news">
                 
                 
                  {blogdata.map((item,index)=>{

                    return(
                      <li key={index}><Link to={`/blog/${item.slug}`}>{item.tittle}</Link></li>
                    )
                  })}
                </ul>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="footer_box">
                <h5 className="footer_heading">Get in Touch</h5>
                <ul className="rent_news cont_info">
                  <li><i className="fa fa-location-arrow"></i><span>Office-09, Floor-10, TDI Business Center, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 140308​</span></li>
                  <li><Link to="#"><i className="fa fa-phone"></i><span>+91 8360249058​</span></Link></li>
                  <li><Link to="#"><i className="fa fa-envelope-o"></i><span>harmanpreet.kaur@ultivic.com</span></Link></li>
                 
                </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <div className="container">
        <p>Copyright © 2021 Ultivic Technologies, All Right Reserved.</p>      
        </div>  
      </div>
    </div>
  )
}

export default Footer
