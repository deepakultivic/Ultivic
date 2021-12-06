import React from "react";
import "./style.css"
export default function CustomModal({ title, body, show, setShow }) {

    function dismissModal(e) {
        e.preventDefault();
        setShow(false);
    }

    return (
        <div className={show === false ? "modal fade" : "modal fade show customModal"} role="dialog"
            style={show === false ? { display: 'none' } : { display: 'block' }} id="confirmationModal" tabIndex="-1"
            aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog" role="document">
                <div className="modal-content group_main_form">
                    {/* <div className="modal-header">
                        <h6 className="modal-title" id="customerModalLabel">{body.emp_name}</h6>
                      
                    </div> */}
                    <div className="modal-body">
                    <button type="button" className="close" onClick={dismissModal}>
                        <i className="fa fa-times" aria-hidden="true"></i>

                        </button>
                        <div className="row w-100">
                            <div className="col-md-4 team_image"  style={{ backgroundImage: `url(${body.emp_image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                                {/* <div className="img">
                                    <img src={body.emp_image} alt="" />
                                </div> */}

                            </div>
                            <div className="col-md-8">
                                <div className="emp_content">
                                    <h4 className="">{body.emp_name}</h4>
                                    <p className="emp_designation">{body.emp_designation}</p>
                                    <p>{body.emp_about}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button className="btn btn-default default-btn" onClick={dismissModal}>No</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}