import React from "react";
import './techbox.css';

function Techbox(props) {
    return (
        <>
            <div className="col-md-6 extra_space">  
                <div className="technology_box_sec">
                    <div className="tech_box_img">
                        <img width={"100"} height={"100"} src={props.textimgsrc} alt="ultivic image" />
                    </div>
                    <div className="tech_box_cont">
                        <h5>{props.tech_box_heading}</h5>
                        <p>{props.tech_box_info}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Techbox;
