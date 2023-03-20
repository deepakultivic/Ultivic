import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner'
toast.configure();
function Homecontact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = input;
  const [submitted, setSubmitted] = useState(false);
  const [errors, setError] = useState(input);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleValidate(input)
  }, [input])
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true);
    if (handleValidate(input)) {
      setInput({ name: "", email: "", message: "" })
      setSubmitted(false);
      setLoading(true)
      let headers = {
        'Content-Type': 'application/json'
      }
      let contactData = {
        name: name,
        email: email,
        message: message
      }
      axios.post('https://ums.ultivic.com/api/development/contact-form', contactData, headers)
        .then((response) => {
          const homeCtc = response.data.data;
          if (response.status === 200) {
            setLoading(false)
            toast.success("Success! We will contact you soon",{  closeOnClick: true,});
            console.log('CONTACT DATA', homeCtc)
          }
          else{}
        })
    }
  };


  function onChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  };

  const handleValidate = (input) => {
    console.log(input)
    let errors = {};
    let isValid = true;
    if (typeof input["email"] !== "undefined") {
      let pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter email address.";
    }
    if (typeof input["name"] !== "undefined") {
      let pattern = new RegExp("^[a-zA-Z ]+$");
      if (!pattern.test(input["name"])) {
        isValid = false;
        errors["name"] = "This field accept only alphabets";
      } else if (input["name"].trim().length <= 2) {
        isValid = false;
        errors["name"] = "min 3 words";
      }
    }
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter name";
    }
    if (!input["message"]) {
      isValid = false;
      errors["message"] = "Please enter cover message.";
    }
    setError(errors);
    console.log(errors)
    return isValid;
  };
  return (
    <div>
  
      <div className="container">
        <div className="home_contact">
          <div className="row">
            <div
              className="col-xl-4 col-lg-5  wow slideInLeft"
              ata-wow-delay="0.3s"
            >
              <div className="addres_block">
                <div className="addres_blocks">
                  <h2 className="common_heading ">Contact us</h2>
                  <ul className="rent_news cont_info">
                    <li>
                      <i className="fa fa-location-arrow"></i>
                      <span>
                        Office-09, Floor-10, TDI Business Center, Sector 118,
                        Sahibzada Ajit Singh Nagar, Punjab 140308
                      </span>
                    </li>
                    <li>
                      <a href="tel:+918360249058">
                        <i className="fa fa-phone"></i>
                        <span>+91 8360249058</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hr@ultivic.com">
                        <i className="fa fa-envelope-o"></i>
                        <span>hr@ultivic.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="home_form wow slideInRight" ata-wow-delay="0.3s">
                <div className="headings_outer ">
                  <div className="mobile_center">
                    <h6 className="sub_heading placement">Get in Touch</h6>
                  </div>
                  <h2 className="common_heading">
                    Let’s create digital revolution together    </h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={onChange}
                    />
                    {submitted && !!errors.name && (
                      <div className="inline-errormsgs">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={
                        "form-control" +
                        (submitted && !!errors.email ? " is-inValid" : "")
                      }
                      name="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={onChange}
                    />
                    {submitted && !!errors.email && (
                      <div className="inline-errormsgs">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      cols="6"
                      rows="6"
                      placeholder="Your Message"
                      value={message}
                      onChange={onChange}
                    ></textarea>
                    {submitted && !!errors.message && (
                      <div className="inline-errormsgs">{errors.message}</div>
                    )}
                  </div>
                  <div className="global_btn mobile_center">
                    <button type="submit" className="btn  brn-sm">Submit</button>
                  </div>
                </form>
                {loading &&
                  <div className="my_loaders">
                    <Oval
                      height="100"
                      width="100"
                      color='grey'
                      ariaLabel='loading'
                    />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecontact;
