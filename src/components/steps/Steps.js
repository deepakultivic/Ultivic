import React from "react";
import "./steps.css";

function Steps() {
  return (
    <div className="space  space_bottom steps pb-0">
      <div className="container">
        <div className="headings_outer text-center">

        </div>

        <div className="steps_cont space pt-0">


          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="steps_cont_text mobile_space">
                <h6 className="sub_heading placement">Our Steps</h6>
                <h2 className="common_heading">Simple Steps. Quick Results</h2>

                <p className="p-0 step_desc">Software development planning encompasses the timeline of a development project. The plan describes all the phases of the process – planning, research, design, develop and launch.</p>
                <p>The quality of the project largely depends on how well the software project plan is built. Planing requires efficient team, goals, objectives and budget.</p>

                <p>A Software Project is the complete procedure of software development from requirement gathering to testing.
                </p>
              </div>


            </div>
            <div className="col-md-6">

              <div className="steps_cont_img">
                <img width={"100"} height={"100"} src="assets/home/steps.svg" alt="ulitvic image" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Steps;
