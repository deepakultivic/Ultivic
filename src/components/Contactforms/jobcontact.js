import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleValidate(input)
},[input])

  const handleSubmit = (e) => {
    e.preventDefault()
   
    setSubmitted(true);
    if(handleValidate(input)){
      setLoading(true)
      setSubmitted(false);
        setInputs({name:"", email:"", mobile:"", cover_letter:"", resume:""})
        const headers ={
          'Content-Type': 'multipart/form-data'
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("cover_letter", cover_letter);
        formData.append("resume", resume)
        axios.post('https://ums.ultivic.com/api/development/job-form',formData,headers)
        .then((response)=>{
            const myjobs = response.data.data;
            console.log(myjobs);
            if (response.status === 200)
            setLoading(false)
            toast.success("Success! We will contact you soon");
        })

    }
  };

  function onChange(event) {
        setInputs({...input,[event.target.name]:event.target.value })
     
  }
  function onfileChange(event) {
        if(event.target.files.length>0)
        {
          setInputs({...input,[event.target.name]:event.target.files[0] })
        }     
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
        errors["name"]="min 3 characters";
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

      console.log(resume.type);
      if (resume.type !== "undefined") {
        if(resume.type == "application/msword" || resume.type == "application/pdf" || resume.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ){

        }else{
          isValid = false;
          errors["resume"] = "File not Supported";
        }
      }
      if (!input["resume"]) {
        isValid = false;
        errors["resume"] = "Please Upload CV/ Resume";
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

  return (
    <div className="job_contact ">
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
            onChange={onfileChange}
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
  );
}

export default Jobcontact;
