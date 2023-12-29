import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function BlogTemplate() {
  const { title } = useParams();
  const [myBlog, setMyBlog] = useState({});
  const [ourBlog, setOurBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ums.ultivic.com/api/development/blog?title=${title}`);
        const myBlogTemplate = response.data.data;
        setMyBlog(myBlogTemplate);
        console.log(myBlogTemplate);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://ums.ultivic.com/api/development/blogs?page=1");
        const recentPosts = response.data.data.data;
        setOurBlog(recentPosts);
        setLoading(false)
        console.log(recentPosts);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };
    fetchData();
    fetchRecentPosts();
  }, [title]);

  const dateformat = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="w-100 text-center my_loader">
        <p></p>
        <div className="loader1">
          <div>
            <img width={"100"} height={"100"} src="/assets/header/logo-white.png" alt="logo" />
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <section className="jobtemplate job_outer" style={{ backgroundImage: `url(${myBlog.image})` }}>
          <div className="container">
            <h2 className="subhead">{myBlog.title}</h2>
          </div>
        </section>
        <section className="blog-info space pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="blogsingle">
                  <div className="published_info">
                    {myBlog.employee && (
                      <div>
                        <div className="avtar_name">
                          <h5 className="avtar_letters">{myBlog.employee.name.slice(0, 1)}</h5>
                          <div className="avtar_info">
                            <p className="author">{myBlog.employee.name}</p>
                            <h5 className="blog_published">{dateformat(myBlog.created_at)}</h5>
                          </div>
                        </div>
                      </div>
                    )}
                    <p dangerouslySetInnerHTML={{ __html: myBlog.description }}></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="m-0 mb-3">Social Share</h5>
                <ul className="social_share_btns p-0">
                  <li>
                    <a href="https://www.facebook.com/UltiVic"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/ultivic-technologies/mycompany"><i className="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ultivic_pvt_ltd"><i className="fa fa-instagram"></i></a>
                  </li>
                </ul>
                <div className="recent_post">
                  <h5 className="mb-3">Recent posts</h5>
                  {ourBlog.slice(0, 4).map((recentPost, index) => (
                    <div key={index}>
                      {recentPost.id !== myBlog.id && (
                        <div className="recent_post_inner">
                          <div className="recent_image">
                            <img width={"100"} height={"100"} src={recentPost.image} alt="post_image" />
                          </div>
                          <div className="recent_content">
                            <h5>{recentPost.title.slice(0, 30)}</h5>
                            <Link to={`/blog/${encodeURIComponent(recentPost.title)}`}>Read More <i className="fa fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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

export default BlogTemplate;
