import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Foot from "../../components/Foot";
import Blogs from "../../components/Blogs";
import "./style.css"
function Our_blogs() {
    return (
        <div>
            <Header/>
            <Subheader title="Our Blogs" clases="blogs_sec"/>
           <section className="space">
           <Blogs/>
           </section>
            <Foot/>
            <Footer/>
        </div>
    )
}

export default Our_blogs
