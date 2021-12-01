import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import axios from "axios";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prev_arrow">
      <i
        className="fa fa-arrow-right"

        onClick={onClick}
      ></i>
      
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="next_arrow">
      <i
        className="fa fa-arrow-left"

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-10 m-auto col-lg-12">
          <Slider {...settings}>
            {
              testimonial.map((curelem, index) => {
                const { image, name, review } = curelem;
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
                          <div className="project_logo">
                            {/* <img src="" alt="" />    */}
                          </div>
                        </div>
                        <h4 className="client-name mt-3">{name}</h4>
                        <p>
                          {review}
                        </p>
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
