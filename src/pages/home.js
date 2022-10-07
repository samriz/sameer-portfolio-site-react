import React from 'react';
import PageTemplate from "../pagetemplate";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Resume from "../misc/SameerRizviResume.pdf";
import Footer from "../footer";
import AboutPage from "./about";
import ContactPage from "./contact";
import { ExternalUrlArrow } from '../components/icons';
import Menu from "../components/menu";
//import SiteHeader from "../components/header";

export default class HomePage extends React.Component
{
    render()
    {
        return (
            <>
                {/* <SiteHeader/> */}
                <Menu/>
                <PageTemplate intro_id={"home"}
                    intro_content={<h1>Sameer Rizvi</h1>}
                    main_content={this.homePageBody()}
                />
                <AboutPage/>
                <ContactPage/>
                <Footer/>
            </>
        );
    }

    homePageBody()
    {
        return(
        <div className={"leftPad"}>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
            <ul>
                <li>My <Link to={Resume} title={"Resume"} target={"_blank"} rel={"author"}>resume <ExternalUrlArrow/></Link>.</li>
                <li>An 
                    <HashLink to={"/#about"} title="About" rel="author"> about</HashLink> section, detailing my academic and professional history.
                </li>
                <li>My <a href={"https://github.com/samriz"} target={"_blank"} title={"GitHub"} rel={"noopener noreferrer"}>GitHub <ExternalUrlArrow/></a>.</li>
                <li>A way to <HashLink to={"/#contact"} title={"Contact"} rel={"author"}>contact</HashLink> me.</li>
                <li>
                    <HashLink smooth to={"/#summaryProfessionalSamples"} onClick={this.openProfessionalSamples}>Links</HashLink> to some of my professional work.
                </li>
            </ul>
        </div>);
    }

    openProfessionalSamples()
    {
        let summary = document.getElementById("summaryProfessionalSamples");
        let details = document.getElementById("samples");
        if(details.hasAttribute("open") === false) summary.click();
    }
}