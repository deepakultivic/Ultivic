
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from '../../components/Subheader'
import { Link } from 'react-router-dom';
import './style.css';

const Item = ({ children, reference }) => {
    return (
        <div ref={reference}>
            {children}
        </div>
    );
};

const Loader = () => {
    return (
        <div className="w-100 text-center">
            <p></p><div className="loader1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

function Our_blogs() {

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const [pages, setPages] = React.useState(1);
    const [total_pages, setTotal] = React.useState(1);
    const [myblogData, setMyblogData] = React.useState(['']);
    const [newDate, setNewDate] = React.useState(['']);
    const observer = React.useRef();

    React.useEffect(() => {
        getItems(pages);
    }, []);

    const lastItemRef = React.useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                console.log(total_pages)
                console.log(entries)
                console.log(hasMore)
                if (entries[0].isIntersecting && hasMore) {
                    console.log(pages, total_pages)
                    if (pages <= total_pages) {
                        getItems(pages);

                    }
                }
            });

            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    const getItems = async (page) => {
        console.log("page:", page)
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        await axios.get(`https://ums.ultivic.com/api/development/blogs?page=${page}`)
            .then(resp => {
                console.log("pages:", pages)
                if (pages == resp.data.data.last_page) {
                    setHasMore(false);
                }
                setPages((pages) => pages + 1);
                setTotal(resp.data.data.last_page);
                setItems([...items, ...resp.data.data.data])
                console.log(items)
                setIsLoading(false);
                setHasMore(true);
            });
    }

    function dateformat(myBlogsDatas) {
        var date = new Date(myBlogsDatas)
        const options = { month: 'long', day: 'numeric' };
        var created_at = date.toLocaleDateString("en-US", options);
        return created_at;

    }
 
        return (
            <>
                <Header />
                <Subheader title="Grow with" img="assets/services/blog-banner.png"  sub="Ultivic" clases="blogs_sec bg_overlay" shortdesc="The designer of your success " />
                <section className="our_blogs_outer space">
                    <div className="container mx-auto px-4 ">
                        <div className="row">

                            {items.map((item, index) =>
                                index + 1 === items.length ? (
                                    <div className="col-md-6 col-lg-4 col-sm-12 mb-5" key={index}>
                                        <div  className="blogs_outer" reference={lastItemRef} >
                                            <div className="blog_inner_data">
                                                <div className="blog_img">
                                                    <img src={item.image} alt={`Image ${index}`} className="img-fluid" width="150" height="150" />
                                                </div>
                                                <div className="blog_content">
                                                    <Link to={`blog/${item.id}`}><h2 className="blog_title_text">{item.title}</h2></Link>
                                                    <p className="blog_published"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                                                        {dateformat(item.created_at)}</p>
                                                        <p className="blogdesc" dangerouslySetInnerHTML={{
                                                        __html: item.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 120)
                                                    }} ></p>
                                                    <Link className="show_more" to={`blog/${item.id}`}>Show more <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ) : (
                                    <div className="col-md-6 col-lg-4 col-sm-12 mb-5" key={index}>
                                        <div className="blogs_outer">
                                            <div className="blog_inner_data">
                                                <div className="blog_img">
                                                    <img src={item.image} className="img-fluid" width="150" height="150" />
                                                </div>
                                                <div className="blog_content">
                                                    <Link to={`blog/${item.id}`}><h2 className="blog_title_text">{item.title}</h2></Link>
                                                    <p className="blog_published"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                                                        {dateformat(item.created_at)}</p>
                                                    <p className="blogdesc" dangerouslySetInnerHTML={{
                                                        __html: item.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 120)
                                                    }} >
                                                        
                                                    </p>
                                                    <Link className="show_more" to={`blog/${item.id}`}>Show more <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            )}

                            {isLoading && <Loader />}
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }


export default Our_blogs;
