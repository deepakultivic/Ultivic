import React from "react";
import Techbox from "./Techbox";
import { tbdata } from "./pdata";

function Technology() {
  return (
    <div>
      <div className="technology space body-blk">
        <div className="container">
          <div className="inner_tech ">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="techn4ology_cont">
                  <div className="headings_outer mobile_center">
                    <h6 className="sub_heading placement">Technologies</h6>
                    <h2 className="common_heading clr-wht">Why you should choose Ultivic</h2>
                  </div>
                  <p className="tech_info clr-wht">
                    Ultivic has a highly skilled team of web developers who have vast knowledge of the technologies that are used in web development whether it’s content management system, custom web software development or any other latest technology. We believe that access to a stellar web development team can be the difference maker that you require for your digital success.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="technology_box_part">
                  <div className="row">
                    <Techbox
                      textimgsrc={tbdata[0].textimgsrc}
                      tech_box_heading={tbdata[0].tech_box_heading}
                      tech_box_info={tbdata[0].tech_box_info}
                    />
                    <Techbox
                      textimgsrc={tbdata[1].textimgsrc}
                      tech_box_heading={tbdata[1].tech_box_heading}
                      tech_box_info={tbdata[1].tech_box_info}
                    />
                    <Techbox
                      textimgsrc={tbdata[2].textimgsrc}
                      tech_box_heading={tbdata[2].tech_box_heading}
                      tech_box_info={tbdata[2].tech_box_info}
                    />
                    <Techbox
                      textimgsrc={tbdata[3].textimgsrc}
                      tech_box_heading={tbdata[3].tech_box_heading}
                      tech_box_info={tbdata[3].tech_box_info}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
