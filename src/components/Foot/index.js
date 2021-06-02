import React from "react";
import { Link } from 'react-router-dom'

import "./style.css"
function Foot() {
  return (
    <div>
      <section className="foot_outer">
        <div className="container">
          <div className="foot_inner">
            <h4>GET IN TOUCH</h4>
            <h2>
              <Link to="tel:+91 8360249058">+91 8360249058</Link>
             
            </h2>
            <div className="foot_info">
              <ul>
                <li>
                  <Link to="mailto: harmanpreet.kaur@ultivic.com"> <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    harmanpreet.kaur@ultivic.com</Link>
            
                </li>
                <li>
                  <p>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Mon-Fri 10am - 7pm
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Foot;
