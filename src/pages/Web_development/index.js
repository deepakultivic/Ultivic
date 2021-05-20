import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import Technology from '../../components/Services/Technology';
import Foot from "../../components/Foot";
import "./style.css";

function Web() {
    return (
        <div>
            <Header />
            <Subheader title="Web Development" clases="web" />
            <Aboutglobal
                imgsrc={content[2].imgsrc}
                about_exp={content[2].about_exp}
                sub_heading={content[2].sub_heading}
                common_heading={content[2].common_heading}
                about_info={content[2].about_info}
            />
            <Technology/>
            <Foot />
            <Footer />
        </div>
    )
}

export default Web;
