import React from "react";

import "./style.css";
import {WOW} from 'wowjs';
function Homecontact() {
  return (
    <div>
      <div className="container">
        <div className="home_contact">
          <div className="row">

            <div className="col-xl-4 col-lg-5 addres_block wow slideInLeft" ata-wow-delay="0.3s">
              
                <div className="addres_blocks">
                  <h2 className="common_heading">Contact us</h2>
                  <ul className="rent_news cont_info">
                    <li>
                      <i className="fa fa-location-arrow"></i>
                      <span>
                        Office-09, Floor-10, TDI Business Center, Sector 118,
                        Sahibzada Ajit Singh Nagar, Punjab 140308
                    </span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>
                        <span>+91 8360249058</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o"></i>
                        <span>harmanpreet.kaur@ultivic.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
            
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="home_form wow slideInRight" ata-wow-delay="0.3s">
                <div className="headings_outer ">
                  <h6 className="sub_heading">Get in Touch
</h6>
                  <h2 className="common_heading">Looking to start project ? Browse our contact details below
</h2>
                </div>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      name="name"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      name="desc"
                      className="form-control"
                      cols="6"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="global_btn">
                    <a href="cm-btn">
                      View All{" "}
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecontact;
