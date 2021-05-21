import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import "./style.css";

function Contact() {
  return (
    <div>
      <Header />
      <Subheader title="Contact" clases="contact" />
      <section className="contact_box space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact_detail">
                <div class="headings_outer mb-4">
                  <h6 class="sub_heading">Our Location</h6>
                  <h2 class="common_heading">Get In touch with Us ​</h2>
                </div>
                <p>
                  Ultivic Technologies is one of the best website development
                  company in India with experience in building websites and web
                  applications
                </p>
                <div className="map">
                  <iframe
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=Ultivic%20Technologies%2C%20Office-09%2C%20Floor-10%2C%20TDI%20Business%20Center%2C%20Sector%20118%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
                    title="Ultivic Technologies, Office-09, Floor-10, TDI Business Center, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 140308"
                    aria-label="Ultivic Technologies, Office-09, Floor-10, TDI Business Center, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 140308"
                  ></iframe>
                </div>
                <ul className="cont_address_info">
                  <li>
                    <i className="fa fa-location-arrow"></i>
                    <span>
                      Office-09, Floor-10, TDI Business Center, Sector 118,
                      Sahibzada Ajit Singh Nagar, Punjab 140308​
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>
                      <span>+91 8360249058​</span>
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
            <div className="col-lg-6">
              <div className="contact_form">
                <div class="headings_outer mb-4">
                  <h6 class="sub_heading">Contact Us</h6>
                  <h2 class="common_heading mb-4">Book an appointment​ ​</h2>
                </div>
                <p className="form_info">
                    Please complete the details below and then click on Submit
                    and we’ll be in contact
                  </p>
                  <form>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your name</label>
                      <input type="text" class="form-control" id="name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your email</label>
                      <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your phone</label>
                      <input type="tel" class="form-control" id="phone"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Subject</label>
                      <input type="text" class="form-control" id="subject"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your message (optional)</label>
                      <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn">Submit</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
