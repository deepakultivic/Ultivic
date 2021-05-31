import React from "react";
import "./steps.css";

function Steps() {
  return (
    <div className="space steps">
      <div className="container">
        <div className="headings_outer text-center">
          <h6 className="sub_heading">Our Steps</h6>
          <h2 className="common_heading">Simple Steps. Quick Results</h2>
        </div>
        <div className="steps_process">
          <div className="row">
            <div className="col-lg-4">
              <div className="step_item">
                <div className="steps_icon">
                  <span className="steps_icon_nbr">1</span>
                  <i className="fa fa-edit"></i>
                </div>
                <div class="item-text">
                  <h5>
                    We Plan <br /> Sketch .
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="step_item center_step">
                <div className="steps_icon">
                  <span className="steps_icon_nbr">2</span>
                  <i className="fa fa-edit"></i>
                </div>
                <div class="item-text">
                  <h5>
                    WE DESIGN & <br /> DEVELOP .
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="step_item last_step">
                <div className="steps_icon">
                  <span className="steps_icon_nbr">3</span>
                  <i className="fa fa-edit"></i>
                </div>
                <div class="item-text">
                  <h5>
                    WE TEST & <br /> DELIVER .
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="steps_cont">
          <div className="row align-items-center">
          <div className="col-lg-6">
              <div className="steps_cont_text">
                <h6>EVERY CUSTOMER IS IMPORTANY TO US!</h6>
                <h5>
                  OUR EXPERIENCED GUYS AT OSCEND ALWAYS GIVING THEIR BEST TO
                  MAKE THE CLIENTS HAPPY!!
                </h5>
                <p>
                  Amco laboris nisi ut aliquip xea commodo consequt. Duis aute
                  irure dolor reprehenderit voluptate velit esse cillum dolore
                  fugiat lore ipsum dolor sit amet consectetur adipisicing elit
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua ut enim ad mid veniam quis nostrud exercitation ullamco
                  laboris nisid. Lorem ipsum dolor sit amet consectetur adip
                  isicing elit sed eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="steps_cont_img">
                <img src="/assets/home/areas-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
