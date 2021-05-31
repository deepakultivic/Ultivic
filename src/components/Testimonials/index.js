import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <div className="container">
      <Slider {...settings}>
       <div>
       <div className="testimonails_outer">
        <div className="testimonials">
          <p>
            I needed more leads for my services. Pay-per-click, banners of maybe
            even broschures. They made an analysis of my existing site. It
            occurred that my website is banned with Google
          </p>
          <h4 className="client-name">Josephine B. Anderson</h4>
          <h5 className="client-designation">CLIENT</h5>
          <div className="client-image">
            <img
              src="/assets/home/cleint1.png"
              className="tfree-client-image wp-post-image"
              alt=""
            />
          </div>
          <i className="fa fa-quote-left qoute_icon" aria-hidden="true"></i>

        </div>
        </div>
       </div>
       <div>
       <div className="testimonails_outer">
        <div className="testimonials">
          <p>
            I needed more leads for my services. Pay-per-click, banners of maybe
            even broschures. They made an analysis of my existing site. It
            occurred that my website is banned with Google
          </p>
          <h4 className="client-name">Josephine B. Anderson</h4>
          <h5 className="client-designation">CLIENT</h5>
          <div className="client-image">
            <img
              src="/assets/home/cleint2.png"
              className="tfree-client-image wp-post-image"
              alt=""
            />
          </div>
          <i className="fa fa-quote-left qoute_icon" aria-hidden="true"></i>

        </div>
        </div>
       </div>
       <div>
       <div className="testimonails_outer">
        <div className="testimonials">
          <p>
            I needed more leads for my services. Pay-per-click, banners of maybe
            even broschures. They made an analysis of my existing site. It
            occurred that my website is banned with Google
          </p>
          <h4 className="client-name">Josephine B. Anderson</h4>
          <h5 className="client-designation">CLIENT</h5>
          <div className="client-image">
            <img
              src="/assets/home/cleint3.png"
              className="tfree-client-image wp-post-image"
              alt=""
            />
          </div>
          <i className="fa fa-quote-left qoute_icon" aria-hidden="true"></i>

        </div>
        </div>
       </div>
       <div>
       <div className="testimonails_outer">
        <div className="testimonials">
          <p>
            I needed more leads for my services. Pay-per-click, banners of maybe
            even broschures. They made an analysis of my existing site. It
            occurred that my website is banned with Google
          </p>
          <h4 className="client-name">Josephine B. Anderson</h4>
          <h5 className="client-designation">CLIENT</h5>
          <div className="client-image">
            <img
              src="/assets/home/cleint3.png"
              className="tfree-client-image wp-post-image"
              alt=""
            />
          </div>
          <i className="fa fa-quote-left qoute_icon" aria-hidden="true"></i>

        </div>
        </div>
       </div>   
      </Slider>
    </div>
  );
}

export default Testimonials;
