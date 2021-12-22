import React,{useState,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Jobs from "../../components/Jobs/jobscontent"
import "./style.css";
function Career() {
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
      <Subheader title="Start your" sub="career " clases="career bg_overlay" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
     
      
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
}

export default Career;
