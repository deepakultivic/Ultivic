import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogdata from "../../components/Blogs/blogdata";

import "./style.css";

function Blogtemplate() {
  const { tittle } = useParams();
  const [myblog, setMyblog] = useState({});
  useEffect(() => {
    const filter = blogdata.filter((item) => item.tittle === tittle);
    setMyblog(filter[0]);
    console.log(filter[0]);
  }, []);
  return (
    <div>
      <Header />
      <section className="jobtemplate" style={{backgroundImage: `url(${myblog.blog_imgs})`}}>
        <h2>
          <div className="container">
            <h2 className="subhead">{myblog.tittle}</h2>
          </div>
        </h2>
      </section>
      <section className="blog-info space">
        <div className="container">
          <div className="blogsingle">
            <p>
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean
              vinegar stumptown yr pop-up artisan.
            </p>
            <h3>A wonderful serenity</h3>
            <p>
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack. Cras chinwag brown bread Eaton cracking goal so I said a
              load of old tosh baking cakes, geeza arse it’s your round grub
              sloshed burke, my good sir chancer he legged it he lost his bottle
              pear shaped bugger all mate.
            </p>
            <img src="/assets/home/blog-1.jpg" alt="" />    
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blogtemplate;
