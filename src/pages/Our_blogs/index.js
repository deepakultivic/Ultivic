import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Blogs from "../../components/Blogs";
import blogdata from "../../components/Blogs/blogdata"
import "./style.css";
// function blogs(val, d){
//     return(
//      <Blogs 
//      blog_imgs={val.blog_imgs}
//      tittle={val.tittle} 
//      description={val.description}
//      blog_link={val.blog_link}
//      date={val.date}
//     />
//     );
// }
function Our_blogs() {

    return (
        <div>
            <Header/>
            <Subheader title="Our Blogs" clases="blogs_sec" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing "/>
            <section className="Blogs space animate__animated animate__bounce">
          <div className="container">
        <div className="row">
       
     
<Blogs blogs={blogdata}/>
     
     
        </div>
      </div>      
          
         
        </section>
            <Foot/>
            <Footer/>
        </div>
    )
}

export default Our_blogs;
