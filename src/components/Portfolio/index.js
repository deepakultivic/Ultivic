import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

function Portfolio() {
  var settings = {  
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
      }
    }]
  };

  return (
    <div className="portfolio_outer">
         <Slider {...settings}>
        <div className="slider_inner loudly ">
          <div className="left_color"></div>
          <div className="right_color"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio_image " data-wow-delay="0.2s">
                  <img width={"100"} height={"100"} src="/assets/home/louble_img.png" alt="carbuyers" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio_constent" data-wow-delay="0.2s">
                  <div className="protfolio_logo">
                    <img width={"100"} height={"100"} src="/assets/home/louble_logo.png" alt="logo" />
                  </div>
                  <h4 className="project_tagline">
                    Loudly - Louder Volume Amplifier & Speaker Booster
                  </h4>

                  <p>
                    Tune into better volumes with the new volume booster free
                    app. Volume boost “Loud Volume Booster for Speakers” works
                    as a sound amplifier and headphone booster designed to boost
                    volume by increasing loudness of video, audio or all
                    notifications on Android
                  </p>
                  <div className="views_details">
                    <div className="views">
                      <h4>100k</h4>
                      <p>Downloads</p>
                    </div>
                    <div className="rating">
                      <h4>4.2</h4>
                      <p>Rating</p>
                    </div>
                  </div>
                  <div className="portfolio_btn">
                    <a className="loudly-btn" target="_blank"  rel="noreferrer" href="https://play.google.com/store/apps/details?id=feniksenia.app.speakerlouder90">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner fitzu ">
          <div className="left_color"></div>
          <div className="right_color"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio_image">
                  <img width={"100"} height={"100"} src="/assets/home/fitzuScreen.png" alt="carbuyers" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio_constent">
                  <div className="protfolio_logo">
                    <img width={"100"} height={"100"} src="/assets/home/Fitzu_logo.png" alt="logo" />
                  </div>
                  <h4 className="project_tagline">
                    "Train Anytime, Anywhere."
                  </h4>

                  <p>
                    Fitzu unlocks the best sporting specialists and trainers in
                    your area at the click of a button. Find a specialist across
                    personal training, pilates, yoga, crossfit, weight loss &
                    diet, martial arts, dancing, football, rugby, surfing,
                    swimming, tennis and more! Our trainer algorithm sorts the
                    most localised and experienced trainers in the category you
                    choose, ensuring you get the most out of your training.
                  </p>

                  <div className="portfolio_btn">
                    <a className="fitzu-btn" target="_blank"  rel="noreferrer" href="https://fitzu.com.au/">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner getthem ">
          <div className="left_color"></div>
          <div className="right_color"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio_image">
                  <img width={"100"} height={"100"} src="/assets/home/getthem_slider.png" alt="carbuyers" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio_constent">
                  <div className="protfolio_logo">
                    <img width={"100"} height={"100"} src="/assets/home/getthemlogo.png" alt="logo" />
                  </div>
                  <h4 className="project_tagline">
                    GetThemAll Any File Downloader Browser
                  </h4>

                  <p>
                    With GetThemAll, you can see all downloadable files when you
                    visit any website. Also, you can download multiple files at
                    once. You can easily download video, mp3, image, pdf and so
                    on from any website.
                  </p>
                  <div className="views_details">
                    <div className="views">
                      <h4>5 Millions +</h4>
                      <p>Downloads</p>
                    </div>
                    <div className="rating">
                      <h4>4.1</h4>
                      <p>Rating</p>
                    </div>
                  </div>
                  <div className="portfolio_btn">
                    <a className="gta-btn" target="_blank"  rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.fvd&hl=en_IN&gl=US">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider_inner fitzuapp ">
          <div className="left_color"></div>
          <div className="right_color"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio_image">
                  <img width={"100"} height={"100"} src="/assets/home/fitzuclien3.png" alt="carbuyers" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio_constent">
                  <div className="protfolio_logo">
                    <img width={"100"} height={"100"} src="/assets/home/Fitzu_logo.png" alt="logo" />
                  </div>
                  <h4 className="project_tagline">
                    "Train Anytime, Anywhere."
                  </h4>

                  <p>
                    Fitzu unlocks the best sporting specialists and trainers in
                    your area at the click of a button. Find a specialist across
                    personal training, pilates, yoga, crossfit, weight loss &
                    diet, martial arts, dancing, football, rugby, surfing,
                    swimming, tennis and more! Our trainer algorithm sorts the
                    most localised and experienced trainers in the category you
                    choose, ensuring you get the most out of your training.
                  </p>
              
                  <div className="portfolio_btn">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner  car_buers">
          <div className="left_color"></div>
          <div className="right_color"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio_image">
                  <img
                    src="/assets/home/carbuyers_screen.png"
                    alt="carbuyers"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio_constent">
                  <div className="protfolio_logo">
                    <img width={"100"} height={"100"} src="/assets/home/carbuyes-logo.png" alt="logo" />
                  </div>
                  <h4 className="project_tagline">"Sell your car today"</h4>
                  <p className="tech_used">
                    Technologies used : Wordpress
                  </p>

                  <p>
                    Carbuyers.com.au has pioneered the industry and we are proud of our success and dedication to customer satisfaction since our inception. We have evolved to offer same day money transfers, the most competitive prices, on site vehicle inspections, free valuations and extremely efficient mobile pick-ups and transfers.

                    We are the purchasing subsidiary of Australian Automotive Sales, a brand known for our quality vehicles, service excellence and great prices.
                  </p>
                  <div className="portfolio_btn">
                    <a className="cb-btn" target="_blank"  rel="noreferrer" href="https://www.carbuyers.com.au/">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Portfolio;
