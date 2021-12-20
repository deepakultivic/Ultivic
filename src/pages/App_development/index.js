import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import Technology from '../../components/Services/Technology';
import Foot from "../../components/Foot";
import Gallery from '../../components/Services/Gallery';
import { gridgallery } from "../../components/Services/pdata";
import SimpleReactLightbox from 'simple-react-lightbox'
import "./style.css";

function App_dev() {
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
        return <div className="w-100 text-center my_loader">
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
    else {
        return (
            <div>
                <Header />
                <Subheader title="App Development" clases="app_dev" shortdesc="Application development is the process of creating a computer program" />
                <div className="app_dev_inner">
                    <Aboutglobal
                        imgsrc={content[3].imgsrc}
                        about_exp={content[3].about_exp}
                        sub_heading={content[3].sub_heading}
                        common_heading={content[3].common_heading}
                        about_info={content[3].about_info}
                    />
                </div>
                <Technology />
                <section className='our_tech space '>
                    <div className='container-fluid'>
                        <div className='tech_inner'>
                            <div className='row'>
                                <div className='col-xl-6 col-md-6'>
                                    <div className='tech_card android'>
                                        <h4>Android App Development
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, provident. Aliquam voluptas atque non sequi qui deserunt odit nobis harum quisquam recusandae iste et animi odio laudantium, voluptates incidunt sunt.</p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/Kotlin_Icon.png" alt="" />

                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/java.svg" alt="" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-md-6'>
                                    <div className='tech_card ios'>
                                        <h4>iOS App Development
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, provident. Aliquam voluptas atque non sequi qui deserunt odit nobis harum quisquam recusandae iste et animi odio laudantium, voluptates incidunt sunt.</p>
                                        <div className='tec_technologies'>
                                            <ul>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/swift.svg" alt="" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/obejctivec.png" alt="" />

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='tech_img'>
                                                        <img src="assets/home/rx.png" alt="" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Foot />
                <Footer />
            </div>
        );
    }
}

export default App_dev;
