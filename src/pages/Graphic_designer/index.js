import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import Planning from '../../components/Services/Planning';
import Technology from '../../components/Services/Technology';
import pdata from '../../components/Services/pdata';
import Foot from "../../components/Foot";
import "./style.css";

function Graphic() {
    return (
        <div>
            <Header />
            <Subheader title="Graphic Design" clases="graphic" />
            <Aboutglobal
                imgsrc={content[1].imgsrc}
                about_exp={content[1].about_exp}
                sub_heading={content[1].sub_heading}
                common_heading={content[1].common_heading}
                about_info={content[1].about_info}
            />
            <Technology/>
            <Planning
            imgsrc={pdata[0].imgsrc}
            sub_heading={pdata[0].sub_heading}
            common_heading={pdata[0].common_heading}
            planning_info={pdata[0].planning_info}
            planing_pts01={pdata[0].planing_pts01}
            planing_pts02={pdata[0].planing_pts02}
            planing_pts03={pdata[0].planing_pts03}
            planing_pts04={pdata[0].planing_pts04}
            />
            <Foot />
            <Footer />
        </div>
    )
}

export default Graphic;
