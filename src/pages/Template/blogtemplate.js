import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Jobcontact from '../../components/Contactforms/jobcontact'
import './style.css'
function blogtemplate() {
  return (
    <div>
      <Header />
      <section className="jobtemplate">
        <h2>
          <div className="container">
            <h2 className="subhead">Career</h2>
          </div>
        </h2>
      </section>
      <section className="jobinfo">
        <div className="container">
          <h4 className="desctitle">Job Description:</h4>
          <div className="job_content">
            <ul className="job_desc">
              <li>
                Candidate will work in PHP/MySQL/Magento. Job responsibilities
                include laying out the architecture / base for Magento based
                websites, full lifecycle application development including
                analysis, design and coding.
              </li>
              <li>
                Candidate will be required to create and maintain technical
                documentation. Candidate will work in a team environment, as
                well as independently. He is also required to adhere to coding
                standards and other development processes (using tools like
                Jira, SVN etc).
              </li>
              <li>
                The candidate should be able to work without supervision to
                complete project task and must possess initiative to address
                issues and opportunities.
              </li>
              <li>
                Candidate would be required to lead and guide the
                junior/mid-level developers over their implementations,
                integrate their works and maintain integrity of application and
                its architecture
              </li>
              <li>
                Candidate would be required to participate in client calls,
                gather requirements to be led by him and members working under
                him, prepare WBS (work breakdown structure), provide estimates
                and cover deliveries of assigned modules.
              </li>
            </ul>
            <ul className="designation_text">
              <li>
                Job Title: <span>Magento Developer</span>
              </li>
              <li>
                Total Openings : <span>10</span>
              </li>
              <li>
                Experience : <span>2-10 years</span>
              </li>
              <li>
                Skill Set :{" "}
                <span>
                  Good knowledge of PHP and MySQL, Magento 1.x (must have) and
                  Magento 2.x exposure (good to have), Good knowledge of OOPs
                </span>
              </li>
              <li>
                Joining Period : <span>30 days</span>
              </li>
            </ul>
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

export default blogtemplate;
