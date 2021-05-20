import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subheader from "../../components/Subheader";
import Aboutglobal from "../../components/Aboutglobal";
import content from '../../components/Aboutglobal/content';
import pdata from '../../components/Services/pdata';
import Planning from '../../components/Services/Planning';
import Foot from "../../components/Foot";
import "./style.css";

function App_dev() {
    return (
        <div>
            <Header />
            <Subheader title="App Development   " clases="app_dev"/>
            <Aboutglobal
                imgsrc={content[3].imgsrc}
                about_exp={content[3].about_exp}
                sub_heading={content[3].sub_heading}
                common_heading={content[3].common_heading}
                about_info={content[3].about_info}
            />
            <Planning
            imgsrc={pdata[1].imgsrc}
            sub_heading={pdata[1].sub_heading}
            common_heading={pdata[1].common_heading}
            planning_info={pdata[1].planning_info}
            planing_pts01={pdata[1].planing_pts01}
            planing_pts02={pdata[1].planing_pts02}
            planing_pts03={pdata[1].planing_pts03}
            planing_pts04={pdata[1].planing_pts04}
            />
            <Planning
            clases={pdata[2].clases}
            imgsrc={pdata[2].imgsrc}
            sub_heading={pdata[2].sub_heading}
            common_heading={pdata[2].common_heading}
            planning_info={pdata[2].planning_info}
            planing_pts01={pdata[2].planing_pts01}
            planing_pts02={pdata[2].planing_pts02}
            planing_pts03={pdata[2].planing_pts03}
            planing_pts04={pdata[2].planing_pts04}
            />
            <Foot/>
            <Footer />
        </div>
    )
}

export default App_dev;
