import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import axios from "axios";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prev_arrow arrow_bg">
      <i
        className="fa fa-angle-double-right"

        onClick={onClick}
      ></i>
      
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="next_arrow arrow_bg">
      <i
        className="fa fa-angle-double-left"

        onClick={onClick}
      ></i>
    </div>
  );
}
function Testimonials() {
  const [testimonial, setTestimonial] = useState([])
  useEffect(() => {
    function clients() {
      axios.get('https://ums.ultivic.com/api/development/testimonials')
        .then((response) => {
          const myclients = response.data.data;
          console.log(myclients)
          setTestimonial(myclients);
          console.log('setting data', setTestimonial)
        })
    }
    clients();
  }, [])


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
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
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            {
              testimonial.map((curelem, index) => {
                const { image, name, review,designation } = curelem;
                return (
                  <div key={index}>
                    <div className="testimonails_outer">
                      <div className="testimonials">
                   
                       <div className="client-image">
                          <img
                            src={image}
                            className="tfree-client-image wp-post-image"
                            alt=""
                          />
                       
                        </div>
                      
                        <div className="client_text">
                        <p>
                          {review}
                        </p>
                        <h4 className="client-name mt-2">{name}</h4>
                        <p className="designation">{designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
