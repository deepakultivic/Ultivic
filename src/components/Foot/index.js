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
              <a href="tel:+91 8360249058">+91 8360249058</a>
             
            </h2>
            <div className="foot_info">
              <ul>
                <li>
                  <a href="mailto:hr@ultivic.com"> <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                   hr@ultivic.com</a>
            
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
