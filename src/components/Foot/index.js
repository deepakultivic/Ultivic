import React from "react";
import { Link } from 'react-router-dom'

import "./style.css"
function Foot() {
  return (
    <div>
      <section className="foot_outer">
        <div className="container">
          <div className="foot_inner">
            <h4>New Heights With Invision Solutions! </h4>
            <h2> TAKE YOUR PROJECT TO </h2>
            <p>Our mobile app developers’ team offers the most incredible mobile solutions in the market within your timeline and budget level. Reach out to us, and we’re going to help extend your horizon to hit new heights!
          </p>
          <div class="global_btn mt-3 "><a class="" href="/contact"> Contact Us<i class="fa fa-long-arrow-right ml-2"></i></a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Foot;
