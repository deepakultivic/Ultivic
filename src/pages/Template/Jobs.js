import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Jobcontact from '../../components/Contactforms/jobcontact'


import './style.css'
import axios from "axios";


function Jobs() {

 
  var { id } = useParams();
 
const [myjobs, setMyjobs] = useState([]);
useEffect(() => {

function myJobtem (){
  axios.get('https://ums.ultivic.com/api/development/job',{
    params:{
      id:id
    }
  })
  .then((response)=>{
    const mysingletempplate = response.data.data
    console.log(mysingletempplate)
    setMyjobs(mysingletempplate);
  })
}
myJobtem();
}, [])
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
      <section className="jobtemplate" >
        <div className="container">
        <h2>
          <div className="container">
            <h2 className="subhead">{myjobs.title}</h2>
          </div>
        </h2>
        </div>
      </section>
      <section className="jobinfo">
        <div className="container">
          <h4 className="desctitle">Job Description:</h4>
          <div className="job_content">
           
         <p>{myjobs.description}</p>
           <div className="space">
           <div className="job_contact ">
              <h2>
              Apply for this position
              </h2>
                <Jobcontact/>
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
export default Jobs;
