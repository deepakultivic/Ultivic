import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./style.css";

function Footer() {
  const [footerBlog, setFooterBlog] = useState([])


  useEffect(() => {
    function myblogData () {
      axios.get("https://ums.ultivic.com/api/development/blogs?page=1")
      .then((response)=>{
        const myBogs = response.data.data.data;
      
console.log(myBogs)
setFooterBlog(myBogs);

      })
    }
    myblogData();

  }, [])
  return (
    <div className="footer">
      <div className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_box">
            <Link to="/" className="footer_logo">
              <img src="/assets/header/logo-white.png" width="100" height="100" alt="CoolBrand" />
            </Link>
            <p className="comp_info">Share your IDEA and We Will Make It Real”. We ensure true worth of your valuable time and money you invested on us by delivering the perfect product</p>
            <ul className="footer_icons">
              <li><a href="https://www.facebook.com/UltiVic" rel="noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/ultivic_tech/?hl=en" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/ultivic-technologies/mycompany" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_box">
                <h5 className="footer_heading">Recent Posts</h5>
                <ul className="rent_news">
                 
                 
                  {footerBlog.map((item,index)=>{
                       const {title,id} = item;
                    return(
                      <li key={index}>  <Link to={`/blog/${id}`}>{title.slice(0, 40)}</Link></li>
                    )
                  })}
                </ul>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="footer_box">
                <h5 className="footer_heading">Get in Touch</h5>
                <ul className="rent_news cont_info">
                  <li><i className="fa fa-location-arrow"></i><span>Office-09, Floor-10, TDI Business Center, Sector 118, Sahibzada Ajit Singh Nagar, Punjab 140308​</span></li>
                  <li><a href="tel:+91 8360249058​"><i className="fa fa-phone"></i><span>+91 8360249058​</span></a></li>
                  <li><a href="mailto:hr@ultivic.com"><i className="fa fa-envelope-o"></i><span>hr@ultivic.com</span></a></li>
                 
                </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <div className="container">
        <p>Copyright © 2022 Ultivic Pvt Ltd, All Right Reserved.</p>      
        </div>  
      </div>
    </div>
  )
}

export default Footer
