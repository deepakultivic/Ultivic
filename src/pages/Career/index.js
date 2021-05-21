import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Aboutglobal from '../../components/Aboutglobal'
import content from '../../components/Aboutglobal/content'
import Technology from "../../components/Services/Technology";
import "./style.css";

function Career() {
  return (
    <div>
      <Header />
      <Subheader title="Career" clases="career" />
      <Aboutglobal
        imgsrc={content[0].imgsrc}
        about_exp={content[0].about_exp}
        sub_heading={content[0].sub_heading}
        common_heading={content[0].common_heading}
        about_info={content[0].about_info}
      />
      <Technology />
      <section className="jobs_sections space">
        <div className="container">
          <div class="headings_outer text-center mb-4"><h6 class="sub_heading">Opportunities</h6><h2 class="common_heading mb-4">Vacancy Available ​</h2> <p>We are a team of digital gurus with the ever-present eagerness to take up challenges and deliver the digital revolution beyond expectations without compromising on fun and the little good-things in life like morning sunshine and a good cup of coffee and daily gossip</p></div>
          <div className="jobs">
            <div className="job_img">
              <img src="/assets/home/blog-1.jpg" alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">Magento Developer</a> </h3>
            <a href="#"> More Details <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className="jobs">
            <div className="job_img">
              <img src="/assets/home/blog-1.jpg" alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">Dotnet+ReactJS Developer</a> </h3>
            <a href="#"> More Details <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className="jobs">
            <div className="job_img">
              <img src="/assets/home/blog-1.jpg" alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">Data Entry</a> </h3>
            <a href="#"> More Details <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className="jobs">
            <div className="job_img">
              <img src="/assets/home/blog-1.jpg" alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">Android Developer</a> </h3>
            <a href="#"> More Details <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className="jobs">
            <div className="job_img">
              <img src="/assets/home/blog-1.jpg" alt="" />
            </div>
            <h3 className="job_heading"> <a href="#">IOS Developer</a> </h3>
            <a href="#"> More Details <i className="fa fa-long-arrow-right"></i></a>
          </div>
        </div>
      </section>
      <Foot />

      <Footer />
    </div>
  );
}

export default Career;
