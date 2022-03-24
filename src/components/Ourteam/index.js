import React from "react";
import "./style.css"
export default function CustomModal({ title, body, show, setShow }) {
 
    function dismissModal(e) {
        document.body.style.overflow = 'auto';
        e.preventDefault();
        setShow(false);
    }
if(show === true){
    document.body.style.overflow = 'hidden';
    console.log("show")
}

    return (
        <div className={show === false ? "modal fade" : "modal fade show customModal"} role="dialog"
            style={show === false ? { display: 'none' } : { display: 'block' }} id="confirmationModal" tabIndex="-1"
            aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog" role="document">
                <div className="modal-content group_main_form">               
                    <div className="modal-body">
                    <button type="button" className="close" onClick={dismissModal}>
                        <i className="fa fa-times" aria-hidden="true"></i>

                        </button>
                        <div className="row w-100">
                            <div className="col-md-4 team_image"  style={{ backgroundImage: `url(${body.emp_image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                            </div>
                            <div className="col-md-8 p-0">
                                <div className="emp_content">
                                    <h4 className="">{body.emp_name}</h4>
                                    <p className="emp_designation">{body.emp_designation}</p>
                                    <p className="experiennce">{body.emp_eperinece}</p>
                                    <p className="skills">{body.emp_expertice}</p>
                                    <p className="emp_about">{body.emp_about}</p>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}