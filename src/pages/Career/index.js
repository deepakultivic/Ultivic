import React,{useState,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Jobs from "../../components/Jobs/jobscontent"
import "./style.css";
function Career() {
 
  return (
    <div>
      <Header />
      <Subheader title="Start your" img="assets/services/career_bg.jpg" sub="career " clases="career bg_overlay" shortdesc="Steer your career in right direction "/>
     
      
      <section className="jobs_sections space">
        <div className="container">
          <div className="headings_outer text-center mb-5"><h6 className="sub_heading">Opportunities</h6><h2 className="common_heading mb-4">Vacancy Available ​</h2> <p>We are a team of digital gurus with the ever-present eagerness to take up challenges and deliver the digital revolution beyond expectations without compromising on fun and the little good-things in life like morning sunshine and a good cup of coffee and daily gossip</p></div>
         
          <Jobs/>
        </div>
      </section>
      <Foot />

      <Footer />
    </div>
  );
}


export default Career;
