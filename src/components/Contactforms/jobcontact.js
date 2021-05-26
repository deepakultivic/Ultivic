import React, { useEffect, useState } from "react";

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
    //  alert("SUBMITTED");
    
    //    if(!name || !email || !tel || !desc || !file ){
    //        return;
    //    }
    setSubmitted(true);
    if(handleValidate(input)){
        setInputs({name:"", email:"", tel:"", desc:"", file:""})
    }
  };
  function onChange(event) {
        setInputs({...input,[event.target.name]:event.target.value})
        console.log(event.target.value)
  }
const handleValidate =(input) => {
    console.log(input)
let errors ={};
let isValid = true;
if (typeof input["email"] !== "undefined") {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
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
    let pattern = new RegExp('^[a-zA-Z]+$');
    if(!pattern.test(input["name"])){
        isValid=false;
        errors["name"]="please enter character";
    }
    else if(input["name"].length <=2 ) {
        isValid=false;
        errors["name"]="max 3 words";
    }
}   
if (typeof input["tel"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["tel"])) {
          isValid = false;
          errors["tel"] = "Please enter valid tel number.";
        } else if (input["tel"].length != 10) {
          isValid = false;
          errors["tel"] = "Please enter valid tel number.";
        }
      }
      if (!input["tel"]) {
        isValid = false;
        errors["tel"] = "Please enter tel number.";
      }

if (!input["name"]) {
    isValid = false;
    errors["name"] = "Please enter name .";
  }
  if (!name["desc"]) {
    isValid = false;
    errors["desc"] = "Please enter cover .";
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
        <button type="submit" className="btn btn-primary brn-sm">Submit</button>
      </form>
    </div>
  );
}

export default Jobcontact;
