import React from "react";
import Techbox from "./Techbox";
import {tbdata} from "./pdata";

function Technology() {
  return (
    <div>
      <div className="technology ">
        <div className="container">
          <div className="inner_tech comn_half_bg">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="techn4ology_cont">
                  <div className="headings_outer ">
                    <h6 className="sub_heading ">Technologies</h6>
                    <h2 className="common_heading">Lorem ipsum dolor sit</h2>
                  </div>
                  <p className="tech_info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
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
