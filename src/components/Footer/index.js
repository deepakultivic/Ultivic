import React, { useEffect } from 'react';
import "./style.css";

function Footer() {

  return (
    <div className="footer">
      <div className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_box">
            <a href="/" className="footer_logo">
              <img src="/assets/header/logo-white.png" height="100" alt="CoolBrand" />
            </a>
            <p className="comp_info">Share your IDEA and We Will Make It Real”. We ensure true worth of your valuable time and money you invested on us by delivering the perfect product</p>
            <ul className="footer_icons">
              <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_box">
                <h5 className="footer_heading">Recent Posts</h5>
                <ul className="rent_news">
                  <li><a href="#">A wonderful serenity Loreum</a></li>
                  <li><a href="#">A wonderful serenity</a></li>
                  <li><a href="#">10 Things Successful Mompreneurs Do Different</a></li>
                </ul>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="footer_box">
                <h5 className="footer_heading">Get in Touch</h5>
                <ul className="rent_news cont_info">
                  <li><i className="fa fa-location-arrow"></i><span>Office-09, Floor-10, TDI Business Center, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 140308​</span></li>
                  <li><a href="#"><i className="fa fa-phone"></i><span>+91 8360249058​</span></a></li>
                  <li><a href="#"><i className="fa fa-envelope-o"></i><span>harmanpreet.kaur@ultivic.com</span></a></li>
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
