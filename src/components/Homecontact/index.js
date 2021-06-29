import React, {useState,  useEffect} from "react";
import { Link } from 'react-router-dom'

import "./style.css";
function Homecontact() {
  const [input, setInput] = useState({
    name:"",
  email:"",
  desc:"",
  }); 

const {name,email,desc} = input;
const [submitted, setSubmitted] = useState(false);
const [errors, setError] = useState(input);
useEffect(() => {
  handleValidate(input)
},[input])

const handleSubmit = (e) => {
  e.preventDefault()
  
  setSubmitted(true);

  if(handleValidate(input)){
      setInput({name:"", email:"", desc:""})
  }
};

function onChange (event){
  setInput({...input, [event.target.name]:event.target.value})
};

const handleValidate =(input) => {
  console.log(input)
let errors ={};
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
if (typeof input["name"] !== "undefined") {
  let pattern = new RegExp("^[a-zA-Z ]+$");
  if (!pattern.test(input["name"])) {
    isValid = false;
    errors["name"] = "This field accept only alphabets";
  } else if (input["name"].length <= 2) {
    isValid = false;
    errors["name"] = "max 3 words";
  }
} 

if (!input["desc"]) {
  isValid = false;
  errors["desc"] = "Please enter cover message .";
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
              className="col-xl-4 col-lg-5 addres_block wow slideInLeft"
              ata-wow-delay="0.3s"
            >
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
                    <Link to="tel:+91 8360249058">
                      <i className="fa fa-phone"></i>
                      <span>+91 8360249058</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:harmanpreet.kaur@ultivic.com">
                      <i className="fa fa-envelope-o"></i>
                      <span>harmanpreet.kaur@ultivic.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="home_form wow slideInRight" ata-wow-delay="0.3s">
                <div className="headings_outer ">
                  <h6 className="sub_heading">Get in Touch</h6>
                  <h2 className="common_heading">
                    Looking to start project ? Browse our contact details below
                  </h2>
                </div>
                <form  onSubmit={handleSubmit}>
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
          ) }
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
          ) }
                  </div>
                  <div className="form-group">
                    <textarea
                      name="desc"
                      className="form-control"
                      cols="6"
                      rows="6"
                      placeholder="Your Message"
                      value={desc}
                      onChange={onChange}
                    ></textarea>
                    {submitted && !!errors.desc && (
            <div className="inline-errormsgs">{errors.desc}</div>
          ) }
                  </div>
                  <div className="global_btn">
                  <button type="submit" className="btn  brn-sm">Submit</button>
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
