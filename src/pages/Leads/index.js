import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "./lead.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner'

const Leads = () => {
    const [timezone, setTimezone] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [value, setvalue] = useState(new Date());
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    // console.log(value);
    const formatdate = (selectedDate) => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return formattedDate;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
          
            setLoading(true)
            let formData = {
                name: name,
                email: email,
                phone_number: phoneNumber,
                time_zone: timezone,
                time: time,
                date: formatdate(value),
                message: message
            }
            axios.post('https://ums.ultivic.com/api/development/sendleademail', formData)
                .then((response) => {
                    if (response.status === 200) {
                        setLoading(false)

                    }
                    toast.success("Success! We will contact you soon");
                })
            setTimezone('');
            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            setErrors({});
        } else {
            setErrors(errors);
        }
    };
    const validate = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Please enter your name';
        }
        if (!email) {
            errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!phoneNumber) {
            errors.phoneNumber = 'Please enter your phone number';
        } else if (!/^[0-9]*$/.test(phoneNumber)) {
            errors.phoneNumber = 'Please enter a valid phone number';
        }
        return errors;
    };
    const today = new Date();
    const disabledDate = (currentDate) => {
        return currentDate < today;
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                dots: false,
                slidesToShow: 2,
                arrows: true,
            },         
        },
        {
            breakpoint: 576,
            settings: {
                dots: false,
                slidesToShow: 1,
                arrows: true,
            },         
        }
    ]
    };
    return (
        <div className='leads_wrapper'>
            <Header />
            <section className="subhead_outer leads_design" >
                <div className="container">
                    <div className="subhead_outer">
                        <div className="leads_header">
                            <h2 className="subhead ">
                                LET’S WORK <br />
                                <span>TOGETHER </span>
                            </h2>
                            <p>We seek to understand, how well we are performing,
                                both as individual and as a team. We seek to continuously
                                Performance improvement as we have set certain
                                Standards in our organization.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container  pt-0">
                    <div className="leads_from">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="lead_calendar">
                                        <h2>
                                            Schedule a call <br />
                                            with our team
                                        </h2>
                                        <Calendar
                                            value={value}
                                            onChange={setvalue}
                                            minDate={today}
                                            tileDisabled={disabledDate}

                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Your name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your name"
                                            className="form-control"
                                        />
                                        {(errors.name && name == "") && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email"
                                            className="form-control"
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Phone number"
                                            className="form-control"
                                        />
                                        {errors.phoneNumber && (
                                            <div className="invalid-feedback">{errors.phoneNumber}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="timezone">Time Zone</label>
                                        <select
                                            id="timezone"
                                            value={timezone}
                                            onChange={(e) => setTimezone(e.target.value)}
                                            className="form-control"
                                        >
                                            <option value="Mountain Standard June Time">Mountain Standard June Time</option>
                                            <option value="Central Standard June Time">Central Standard June Time</option>
                                            <option value="Easter Standard June Time">Easter Standard June Time</option>
                                            <option value="Pacific Standard June Time">Pacific Standard June Time</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Select time</label>
                                        <input
                                            type="time"
                                            id="phoneNumber"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            placeholder="Phone number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="form-control"
                                            cols="30"
                                            rows="1"
                                        ></textarea>
                                    </div>
                                    <div className="lead_submit">
                                        <button className="btn  brn-sm">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {loading &&
                            <div className="my_loaders">
                                <Oval
                                    height="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="testimonials_leads space">
                        <h2>What Our <br /><span>Customer</span>  Say</h2>
                        <Slider {...settings}>
                            <div className="leads_testmonials_card_outer">
                                <div className="leads_testmonials_card">
                                    <div className='leads_testimonials_head'>
                                        <div className='tesimonials_leads_image'>
                                            <img src="assets/services/leads_client.png" />
                                        </div>
                                        <div className='tesimonials_leads_info'>
                                            <h6>GAGAN S</h6>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                    <p className='client_reviews'>
                                        Rakshak is well dedicated towards his work. He has great knowledge in CodeIgniter and Node.js. Completed his task on time with proper communication. Will love to work with him again . Definitely Recommended.</p>
                                    <div className='ratings_star'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="leads_testmonials_card_outer">
                                <div className="leads_testmonials_card">
                                    <div className='leads_testimonials_head'>
                                        <div className='tesimonials_leads_image'>
                                            <img src="assets/services/leads_client01.png" />
                                        </div>
                                        <div className='tesimonials_leads_info'>
                                            <h6>ESHA SHETTY</h6>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                    <p className='client_reviews'>
                                        Rakshak Gaind is very cooperative and flexible. He added more functionality to my scope within a reasonable budget and was very helpful. Highly recommended! The communication with the team is really good!
                                    </p>
                                    <div className='ratings_star'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="leads_testmonials_card_outer">
                                <div className="leads_testmonials_card">
                                    <div className='leads_testimonials_head'>
                                        <div className='tesimonials_leads_image'>
                                            <img src="assets/services/leads_client02.png" />
                                        </div>
                                        <div className='tesimonials_leads_info'>
                                            <h6>MAURICE ASHKENAZI-BAKES</h6>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                    <p className='client_reviews'>Harmanpreet kaur is a devoted programmer, fast learner and very organised, she managed to dive into complex code find the issues and resolve them quickly. we definitely will use her services again. Thanks</p>
                                    <div className='ratings_star'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="leads_testmonials_card_outer">
                                <div className="leads_testmonials_card">
                                    <div className='leads_testimonials_head'>
                                        <div className='tesimonials_leads_image'>
                                            <img src="assets/services/leads_client01.png" />
                                        </div>
                                        <div className='tesimonials_leads_info'>
                                            <h6>ESHA SHETTY</h6>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                    <p className='client_reviews'>
                                        Rakshak Gaind is very cooperative and flexible. He added more functionality to my scope within a reasonable budget and was very helpful. Highly recommended! The communication with the team is really good!
                                    </p>
                                    <div className='ratings_star'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
             
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Leads