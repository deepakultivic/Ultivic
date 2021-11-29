import React from "react";
import './planning.css';

function Planning(props) {
  return (
    <div>
      <div className="planning_sec space " id={props.clases}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img_cont">
                <img src={props.imgsrc} alt=""/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="planning_box">
                <div className="headings_outer ">
                  <h6 className="sub_heading ">{props.sub_heading}</h6>
                  <h2 className="common_heading">
                  {props.common_heading}
                  </h2>
                  <p className="planning_info">{props.planning_info}</p>
                  <ul className="planning_pts">
                      <li><i className="fa fa-check"></i>{props.planing_pts01}</li>
                      <li><i className="fa fa-check"></i>{props.planing_pts02}</li>
                      <li><i className="fa fa-check"></i>{props.planing_pts03}</li>
                      <li><i className="fa fa-check"></i>{props.planing_pts04}</li>
                      <li><i className="fa fa-check"></i>{props.planing_pts05}</li>
                      <li><i className="fa fa-check"></i>{props.planing_pts06}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
