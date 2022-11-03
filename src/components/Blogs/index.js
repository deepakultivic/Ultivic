import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './style.css'; 
import { WOW } from 'wowjs';

const Blogs = () => {

  useEffect(() => {
   

    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: false,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
         
        },
        scrollContainer: null
      }
    );
    
    wow.init();

  }, [])
  

  const [ourblog, setOurblog] = useState([])


  useEffect(() => {
    function myblogData () {
      axios.get("https://ums.ultivic.com/api/development/blogs?page=1")
      .then((response)=>{
        const myBogs = response.data.data.data;
      
console.log(myBogs)
        setOurblog(myBogs);

      })
    }
    myblogData();

  }, [])
  return (
    <div className="row  wow slideInLeft" data-wow-delay="0.3s">
  
  {ourblog.slice(0, 3).map((curelem, index) => {
          const {title,description,image,id} = curelem;
          return (
            <div className=" col-lg-4 col-sm-6" key={index}>
            <div className="blog_card">
            <div className="blog_inner">
                <div className="blog_img">
                  <Link to={`/blog/${title}`}><img src={image} alt="ultivic blog" width={"100"} height={"100"} /></Link>
                </div>
                <div className="blog_content">
                  <h5>
                    <Link to={`/blog/${title}`}>{title}</Link>
                  </h5>
                  <p dangerouslySetInnerHTML={{
                    __html: description.replace(/<\/?[^>]+(>|$)/g, "").slice(0,70)
                  }}>   
                      
                  </p>
                  <div className="blog_btn">
                    <Link to={`/blog/${title}`}>Show More<i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })
  }
</div>
 
  )
}

export default Blogs
