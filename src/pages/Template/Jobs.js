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

  return (
    <div>
      <Header />
      <section className="jobtemplate" >
        <div className="container">
        <h2>
          <div className="container">
         <div className="mobile_center">
         <h2 className="subhead">{myjobs.title}</h2>
         </div>
          </div>
        </h2>
        </div>
      </section>
      <section className="jobinfo">
        <div className="container">
          <h4 className="desctitle">Job Description:</h4>
          <div className="job_content">
          <p dangerouslySetInnerHTML={{
                    __html: myjobs.description
                  }}></p>
         
           <div className="space pt-4">
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

export default Jobs;
