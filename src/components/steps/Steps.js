import React from "react";
import "./steps.css";

function Steps() {
  return (
    <div className="space steps pb-0">
      <div className="container">
        <div className="headings_outer text-center mb-5">
          <h6 className="sub_heading">Our Steps</h6>
          <h2 className="common_heading">Simple Steps. Quick Results</h2>
        </div>
      
        <div className="steps_cont">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="steps_cont_text mobile_space">

                <h3>
                  EVERY CUSTOMER IS IMPORTANT TO US!
                </h3>
                <p>
                  Our experts, search for new information to understand alternative source of good practice and implement creative working methods. Being flexible is our approach for the best outcome.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="steps_cont_img">
                <img src="assets/home/sdlc_life_cycyle.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
