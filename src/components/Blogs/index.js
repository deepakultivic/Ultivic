import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './style.css';


const Blogs = () => {
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
    <div className="row">
  
  {ourblog.slice(0, 3).map((curelem, index) => {
          const {title,description,image,id} = curelem;
          return (
            <div className=" col-lg-4 col-sm-6" key={index}>
              <div className="blog_inner">
                <div className="blog_img">
                  <Link to={`/blog/${id}`}><img src={image} alt="ultivic blog" /></Link>
                </div>
                <div className="blog_content">
                  <h5>
                    <Link to={`/blog/${id}`}>{title}</Link>
                  </h5>
                  <p dangerouslySetInnerHTML={{
                    __html: description.replace(/<\/?[^>]+(>|$)/g, "").slice(0,70)
                  }}>   
                      
                  </p>
                  <div className="blog_btn">
                    <Link to={`/blog/${id}`}>Show More<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></Link>
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
