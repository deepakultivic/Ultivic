import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./style.css";

function Blogtemplate() {
  const { id } = useParams();
  const [myblog, setMyblog] = useState({});
  useEffect(() => {
    // const filter = blogdata.filter((item) => item.slug === slug);
    // setMyblog(filter[0]);
    // console.log(filter[0]);
    function showBlogs (){
      axios.get('https://ums.ultivic.com/api/development/blog',{
        params:{
          id:id
        }
      })
      .then((response)=>{
        const myblogTemplate = response.data.data;
        setMyblog(myblogTemplate);
      })
    }
    showBlogs();
  }, []);
  return (
    <div>
      <Header />
      <section className="jobtemplate job_outer" style={{backgroundImage: `url(${myblog.image})`}}>
       
          <div className="container">
            <h2 className="subhead">{myblog.title}</h2>
          </div>
    
      </section>
      <section className="blog-info space">
        <div className="container">
          <div className="blogsingle">
         { myblog.description}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blogtemplate;
