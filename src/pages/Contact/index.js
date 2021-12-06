import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import "./style.css";
import { Link } from 'react-router-dom'
import axios from "axios";


function Contact() {
  const [input, setInputs] = useState({
    fullname: "",
    email: "",
    tel: "",
    subject: "",
    description: "",
  });
  const { fullname, email, tel, subject, description } = input;
  const [submitted, setSubmitted] = useState(false);
  const [errors, setError] = useState(input);
  useEffect(() => {
    handleValidate(input);
  }, [input]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('testing');
    setSubmitted(true);
    if (handleValidate(input)) {
      setSubmitted(false);
      setInputs({ fullname: "", email: "", tel: "", subject: "", description: "" })
            let headers = {
        'Content-Type': 'application/json'
      }
      let contactData ={
        name :fullname,
        email: email,
        tel: tel,
        subject : subject,
        description :description,
      }
      axios.post('https://ums.ultivic.com/api/development/contact-form', contactData, headers)
        .then((response)=>{
            const homeCtc = response.data.data;
            console.log('CONTACT DATA',homeCtc)
        })
    }
  };
  function onChange(event) {
    setInputs({ ...input, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  }
  const handleValidate = (input) => {
    // console.log(input);
    let errors = {};
    let isValid = true;
    if (typeof input["email"] !== "undefined") {
      let pattern = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter email address.";
    }
    if (typeof input["fullname"] !== "undefined") {
      let pattern = new RegExp("^[a-zA-Z ]+$");
      if (!pattern.test(input["fullname"])) {
        isValid = false;
        errors["fullname"] = "This field accept only alphabets";
      } else if (input["fullname"].length <= 2) {
        isValid = false;
        errors["fullname"] = "max 3 words";
      }
    }
    if (!input["fullname"]) {
      isValid = false;
      errors["fullname"] = "Please enter name";
    }
    if (typeof input["tel"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["tel"])) {
        isValid = false;
        errors["tel"] = "Please enter valid tel number";
      } else if (input["tel"].length != 10) {
        isValid = false;
        errors["tel"] = "Please enter valid tel number";
      }
    }
    if (!input["tel"]) {
      isValid = false;
      errors["tel"] = "Please enter mobile number";
    }


    if (!input["description"]) {
      isValid = false;
      errors["description"] = "Please enter cover message ";
    }
    setError(errors);
    // console.log(errors);
    return isValid;
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
      const loadData = async () => {
  
        // Wait for two second
        await new Promise((r) => setTimeout(r, 1000));
  
        // Toggle loading state
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return   <div className="w-100 text-center my_loader">
        <p></p><div className="loader1">
        <div>
          <img src="/assets/header/logo-white.png" alt="logo" />
          </div>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  </div>
  </div>
    }
    else{
  return (
    <div>
      <Header />
      <Subheader title="Contact" clases="contact" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing " />
      <section className="contact_box space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact_detail">
                <div className="headings_outer mb-4">
                  <h6 className="sub_heading placement">Our Location</h6>
                  <h2 className="common_heading">Get In touch with Us ​</h2>
                </div>
                <p>
                  Ultivic Technologies is one of the best website development
                  company in India with experience in building websites and web
                  applications
                </p>
                <div className="map">
                  <iframe

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
                      Sahibzada Ajit Singh Nagar, Punjab 140308
                    </span>
                  </li>
                  <li>
                    <Link to="tel:+91 8360249058​">
                      <i className="fa fa-phone"></i>
                      <span>+91 8360249058​</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:harmanpreet.kaur@ultivic.com">
                      <i className="fa fa-envelope-o"></i>
                      <span>hr@ultivic.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_form">
                <div className="headings_outer mb-4">
                  <h6 className="sub_heading placement">Contact Us</h6>
                  <h2 className="common_heading mb-4">
                    Book an appointment
                  </h2>
                </div>
                <p className="form_info">
                  Discuss your ideas with us to make it reality.


                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label >Your name</label>
                    <input type="text" className="form-control" name="fullname" value={fullname} onChange={onChange} />
                    {submitted && !!errors.fullname && (
                      <div className="inline-errormsgs">{errors.fullname}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label >Your email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} />
                    {submitted && !!errors.email && (
                      <div className="inline-errormsgs">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label >Your phone</label>
                    <input type="tel" className="form-control" id="phone" name="tel" value={tel} onChange={onChange} />
                    {submitted && !!errors.tel && (
                      <div className="inline-errormsgs">{errors.tel}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label >Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" value={subject} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label >
                      Your message (optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      name="description" value={description}
                      onChange={onChange}
                    ></textarea>
                    {submitted && !!errors.description && (
                      <div className="inline-errormsgs">{errors.description}</div>
                    )}
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
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
}

export default Contact;
