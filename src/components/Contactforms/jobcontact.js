import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Jobcontact() {
  const [input, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    cover_letter: "",
    resume: "",
  });
  const { name, email, mobile, cover_letter, resume } = input;
  const [submitted, setSubmitted] = useState(false);
  const [errors, setError] = useState(input);
  useEffect(() => {
    handleValidate(input)
},[input])

  const handleSubmit = (e) => {
    e.preventDefault()
   
    setSubmitted(true);
    if(handleValidate(input)){
      setSubmitted(false);
        setInputs({name:"", email:"", mobile:"", cover_letter:"", resume:""})
        const headers ={
          'Content-Type': 'multipart/form-data'
        }
        let myblogForm = {
          name:name,
          email:email,
          mobile:mobile,
          cover_letter:cover_letter,
          resume:resume
        }
        axios.post('https://ums.ultivic.com/api/development/job-form',myblogForm,headers)
        .then((response)=>{
            const myjobs = response.data.data;
            console.log(myjobs);
            if (response.status === 200)
            toast.success("Success! We will contact you soon");
        })

    }
  };

  function onChange(event) {
        setInputs({...input,[event.target.name]:event.target.value})
        // console.log(event.target.value)
  }
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
  if(typeof input["name"] !== "undefined"){
    let pattern = new RegExp('^[a-zA-Z ]+$');
    if(!pattern.test(input["name"])){
        isValid=false;
        errors["name"]="This field accept only alphabets";
    }
    else if(input["name"].trim().length <=2 ) {
        isValid=false;
        errors["name"]="max 3 words";
    }
}   
if (typeof input["mobile"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["mobile"])) {
          isValid = false;
          errors["mobile"] = "Please enter valid mobile number.";
        } else if (input["mobile"].length !== 10) {
          isValid = false;
          errors["mobile"] = "Please enter valid mobile number.";
        }
      }
      if (!input["mobile"]) {
        isValid = false;
        errors["mobile"] = "Please enter mobile number.";
      }

   
      if (typeof input["resume"] !== "undefined") {
        var pattern = new RegExp(/(\.doc|\.pdf|\.docx)$/i);
        if (!pattern.test(input["resume"])) {
          isValid = false;
          errors["resume"] = "File not Supported";
        }
      }
  

if (!input["name"]) {
    isValid = false;
    errors["name"] = "Please enter the name ";
  }
  if (!input["cover_letter"]) {
    isValid = false;
    errors["cover_letter"] = "Please enter cover ";
  }
setError(errors);
console.log(errors)
return isValid;
}; 
  //   const [errors, setError] = useState(input);
  //   const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Full Name</label>
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
          <label htmlFor="email"> Email</label>
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
          <label htmlFor="mobile"> Mobile</label>
          <input
            type="mobile"
            className={
                "form-control" + 
        (submitted && !!errors.mobile ? " is-inValid" : "")
        }
            name="mobile"
            placeholder="Phone"
            value={mobile}
            onChange={onChange}
          />
          {submitted && !!errors.mobile && (
            <div className="inline-errormsgs">{errors.mobile}</div>
          ) }
        </div>
        <div className="form-group">
          <label htmlFor="resume">Cover Letter</label>
          <textarea
            name="cover_letter"
            className={
                "form-control" + 
        (submitted && !!errors.cover_letter ? " is-inValid" : "")
            }
            id=""
            cols="30"
            rows="10"
            value={cover_letter}
            onChange={onChange}
          ></textarea>
          {submitted && !!errors.cover_letter && (
            <div className="inline-errormsgs">{errors.cover_letter}</div>
          ) }
        </div>
        <div className="form-group">
          <label htmlFor="resume"> Upload CV/ Resume</label>
          <input
            type="file"
            name="resume"
            className="form-control"
            value={resume}
            onChange={onChange}
          />
            {submitted && !!errors.resume && (
            <div className="inline-errormsgs">{errors.resume}</div>
          ) }
        </div>
        <p className="resumetype">Allowed Type(s): .pdf, .doc, .docx</p>
      <div className="mobile_center">
      <button type="submit" className="btn btn-primary brn-sm">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default Jobcontact;
