import React from "react";
import "./style.css"
export default function CustomModal({ title, body, show, setShow }) {
    function dismissModal(e) {
        document.body.style.overflow = 'auto';
        e.preventDefault();
        setShow(false);
    }
    if (show === true) {
        document.body.style.overflow = 'hidden';
        console.log("show")
    }
    console.log("body");
    console.log(body);
    return (
        <div className={show === false ? "modal fade" : "modal fade show customModal"} role="dialog"
            style={show === false ? { display: 'none' } : { display: 'block' }} id="confirmationModal" tabIndex="-1"
            aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content group_main_form">
                    <div className="modal-body">
                        <button type="button" className="close" onClick={dismissModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>

                        </button>
                        <div className="about_emp">
                            <div className="row w-100 align-items-center">
                                <div className="col-md-6">
                                    <div className="emp_profile">
                                        <img src={body.emp_image} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="employe_information">
                                        <h6>Hello</h6>
                                        <h2>I'm <span>{body.emp_name} <br /> a</span> {body.emp_designation}</h2>
                                        <p>{body.emp_about}</p>
                                        <ul>
                                            {
                                                body.skills.slice(0,4).map((curEl, index) => {
                                                    return (

                                                        <li key={index}>{curEl}</li>

                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                              
                            </div>
                        </div>
                        <div className="employee_info w-100">
                           <div className="row w-100 align-items-center">
                               <div className="col-md-6">
                                      <div className="text_highlight">
                                          <h3>Expertise in</h3>
                                          <p>{body.emp_about}</p>
                                          </div>          
                               </div>
                               <div className="col-md-6">
                               <div className="employe_information">
                                            <h4>Skills and Stength</h4>
                                        <ul>
                                            {
                                                body.skills.map((curEl, index) => {
                                                    return (

                                                        <li key={index}>{curEl}</li>

                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                               </div>
                               </div>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}