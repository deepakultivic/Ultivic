import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Aboutglobal from '../../components/Aboutglobal'
import content from '../../components/Aboutglobal/content'
import Technology from "../../components/Services/Technology";
import Jobs from "../../components/Jobs/jobscontent"
import jobsarr from "../../components/Jobs/jobsarr"
import "./style.css";

function job(val, i){
  return(
    <Jobs
    imgurl={val.imgurl}
    jobTitle={val.jobTitle}
    joblink={val.joblink}
    />
  );
}
function Career() {
  return (
    <div>
      <Header />
      <Subheader title="Career" clases="career" />
      <Aboutglobal
        imgsrc={content[4].imgsrc}
        about_exp={content[4].about_exp}
        sub_heading={content[4].sub_heading}
        common_heading={content[4].common_heading}
        about_info={content[4].about_info}
      />
      <Technology />
      <section className="jobs_sections space">
        <div className="container">
          <div className="headings_outer text-center mb-4"><h6 className="sub_heading">Opportunities</h6><h2 className="common_heading mb-4">Vacancy Available ​</h2> <p>We are a team of digital gurus with the ever-present eagerness to take up challenges and deliver the digital revolution beyond expectations without compromising on fun and the little good-things in life like morning sunshine and a good cup of coffee and daily gossip</p></div>
         
          {jobsarr.map(job)}
        </div>
      </section>
      <Foot />

      <Footer />
    </div>
  );
}

export default Career;
