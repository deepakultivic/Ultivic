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
                Harmanpreet kaur is a devoted programmer, fast learner and very organised, she managed to dive into complex code find the issues and resolve them quickly. we definitely will use her services again. Thanks
                </p>
              <h4 className="client-name">MAURICE ASHKENAZI-BAKES</h4>
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
              <p>Rakshak is well dedicated towards his work. He has great knowledge in CodeIgniter and Node.js. Completed his task on time with proper communication. Will love to work with him again . Definitely Recommended.</p>
              <h4 className="client-name">GAGAN S</h4>
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
              Harmanpreet and her team are really committed and deliver a good job. We will keep working with them on a long-term basis. She is smart and effective. She is flexible and provides quality solutions.
             </p>
              <h4 className="client-name">GEORGE DEPREZ</h4>
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
              Rakshak Gaind is very cooperative and flexible. He added more functionality to my scope within a reasonable budget and was very helpful. Highly recommended! The communication with the team is really good!
             </p>
              <h4 className="client-name">ESHA SHETTY</h4>
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
