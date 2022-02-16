import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Jobcontact() {
  const [input, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
    desc: "",
    file: "",
  });
  const { name, email, tel, desc, file } = input;
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
        setInputs({name:"", email:"", tel:"", desc:"", file:""})
        const headers ={
          'Content-Type': 'application/json'
        }
        let myblogForm = {
          name:name,
          email:email,
          tel:tel,
          desc:desc,
          file:file
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
if (typeof input["tel"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["tel"])) {
          isValid = false;
          errors["tel"] = "Please enter valid tel number.";
        } else if (input["tel"].length !== 10) {
          isValid = false;
          errors["tel"] = "Please enter valid tel number.";
        }
      }
      if (!input["tel"]) {
        isValid = false;
        errors["tel"] = "Please enter mobile number.";
      }

if (!input["name"]) {
    isValid = false;
    errors["name"] = "Please enter the name ";
  }
  if (!input["desc"]) {
    isValid = false;
    errors["desc"] = "Please enter cover ";
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
          <label htmlFor="tel"> Mobile</label>
          <input
            type="tel"
            className={
                "form-control" + 
        (submitted && !!errors.tel ? " is-inValid" : "")
        }
            name="tel"
            placeholder="Phone"
            value={tel}
            onChange={onChange}
          />
          {submitted && !!errors.tel && (
            <div className="inline-errormsgs">{errors.tel}</div>
          ) }
        </div>
        <div className="form-group">
          <label htmlFor="file">Cover Letter</label>
          <textarea
            name="desc"
            className={
                "form-control" + 
        (submitted && !!errors.desc ? " is-inValid" : "")
            }
            id=""
            cols="30"
            rows="10"
            value={desc}
            onChange={onChange}
          ></textarea>
          {submitted && !!errors.desc && (
            <div className="inline-errormsgs">{errors.desc}</div>
          ) }
        </div>
        <div className="form-group">
          <label htmlFor="file"> Upload CV/ Resume</label>
          <input
            type="file"
            name="file"
            className="form-control"
            value={file}
            onChange={onChange}
          />
        </div>
        <p className="filetype">Allowed Type(s): .pdf, .doc, .docx</p>
      <div className="mobile_center">
      <button type="submit" className="btn btn-primary brn-sm">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default Jobcontact;
