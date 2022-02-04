import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./style.css";
function Blogtemplate(props) {

   const { id } = useParams();
  // const [currentId, setCurrentId] = useState();
  const [myblog, setMyblog] = useState({});
  const [ourblog, setOurblog] = useState([])
  useEffect(() => {

    function showBlogs() {
      axios.get('https://ums.ultivic.com/api/development/blog', {
        params: {
          id: id
        }
      })
        .then((response) => {
          const myblogTemplate = response.data.data;
          setMyblog(myblogTemplate);
          console.log(myblogTemplate)
        })
    }
    showBlogs();
    function myblogData () {
      axios.get("https://ums.ultivic.com/api/development/blogs?page=1")
      .then((response)=>{
        const myBogs = response.data.data.data;
      
console.log(myBogs)
        setOurblog(myBogs);
      //  setCurrentId(myBogs.id)

      })
    }
    myblogData();
  }, [props.match.params.id]);


  function dateformat(myBlogsDatas) {
    var date = new Date(myBlogsDatas)
    const options = { month: 'long', day: 'numeric' };
    var created_at = date.toLocaleDateString("en-US", options);
    return created_at;

  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
      const loadData = async () => {

        // Wait for two second
        await new Promise((r) => setTimeout(r, 1000));

        // Toggle loading state
        setLoading((loading) => !loading);
      };

      loadData();
    }, [])

    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return   <div className="w-100 text-center my_loader">
        <p></p><div className="loader1">
        <div>
          <img src="/assets/header/logo-white.png" alt="logo" />
          </div>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  </div>
  </div>
    }
    else{
  return (
    <div>
      <Header />
      <section className="jobtemplate job_outer" style={{ backgroundImage: `url(${myblog.image})` }}>

        <div className="container">
          <h2 className="subhead">{myblog.title}</h2>
        </div>

      </section>
      <section className="blog-info space pt-4">
        <div className="container">
          <div className="row">

            <div className="col-md-9">
              <div className="blogsingle">
                <div className="published_info">

                  {myblog.employee &&
                    <div>
                      <div className="avtar_name">
                        <h5 className="avtar_letters">{myblog.employee.name.slice(0, 1)}</h5>
                        <div className="avtar_info">
                          <p className="author">{myblog.employee.name}</p>
                          <h5 className="blog_published">{dateformat(myblog.created_at)}</h5>
                        </div>
                      </div>
                    </div>
                  }
                  <p dangerouslySetInnerHTML={{
                    __html: myblog.description
                  }}></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
                <h5 className="m-0">Social Share</h5>
              <ul className="social_share_btns p-0" >
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
              </ul>
              <div className="recent_post">
                <h5 className="mb-3">Recent posts</h5>
              {ourblog.slice(0, 3).map((curelem, index) => {
               // console.log(currentId);
               

          const {title,image,id} = curelem;
          return <div key={index}>
          {curelem['id'] != myblog.id &&
               <div className="recent_post_inner" >
                <div className="recent_image">
                <img src={image} alt="post_image" />
                </div>
                <div className="recent_content">
                  <h5>{title.slice(0, 30)}</h5>
                  <Link to={`/blog/${id}`}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
            </div> 
              
          }
          </div>
        })
      }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
}

export default Blogtemplate;
