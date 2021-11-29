import React,{useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import axios from "axios";
function Testimonials() {
  const [testimonial, setTestimonial] = useState([])
useEffect(() => {
    function clients ()  {
        axios.get('https://ums.ultivic.com/api/development/testimonials')
        .then((response)=>{
          const myclients = response.data.data;
          console.log(myclients)
          setTestimonial(myclients);
          console.log('setting data',setTestimonial)
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
         {
           
           testimonial.map((curelem,index)=>{
             const {image,name,review,designation} = curelem;
          return(
            <div  key={index}>
            <div className="testimonails_outer">
            <div className="testimonials">
              <p>
{review}
                </p>
              <h4 className="client-name">{name}</h4>
              <h5 className="client-designation">{designation}</h5>
              <div className="client-image">
                <img
                  src={image}
                  className="tfree-client-image wp-post-image"
                  alt=""
                />
              </div>
              <i className="fa fa-quote-left qoute_icon" aria-hidden="true"></i>

            </div>
          </div>
          </div>
          )
          })

         }
  
      </Slider>
    </div>
  );
}

export default Testimonials;
