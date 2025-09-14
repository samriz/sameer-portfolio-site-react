import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PageTemplate from "./pagetemplate";
import Resume from "./misc/SameerRizviResume2025.pdf";
import { ExternalUrlArrow } from './components/icons';

export default class Home extends React.Component
{
    render()
    {
        return (
            <PageTemplate intro_id={"home"} main_id={"homeMain"}
                intro_content={<h1>Sameer Rizvi</h1>}
                main_content={this.homeContent()}
            />
        );
    }

    homeContent()
    {
        return(
        <div className={"leftPad"}>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
            <ul>
                <li>My <Link to={Resume} title={"Resume"} target={"_blank"} rel={"author"}>resume <ExternalUrlArrow/></Link>.</li>
                <li>An 
                    <HashLink smooth to={"/#aboutMain"} title="About" rel="author"> about</HashLink> section, detailing my academic and professional history.
                </li>
                <li>My <a href={"https://github.com/samriz"} target={"_blank"} title={"GitHub"} rel={"noopener noreferrer"}>GitHub page <ExternalUrlArrow/></a>.</li>
                <li>A way to <HashLink smooth to={"/#contactMain"} title={"Contact"} rel={"author"}>contact</HashLink> me.</li>
                {/* <li>
                    <HashLink smooth to={"/#summaryProfessionalSamples"} onClick={this.openProfessionalSamples}>Links</HashLink> to some of my professional work.
                </li> */}
            </ul>
        </div>);
    }

    openProfessionalSamples()
    {
        let summary = document.getElementById("summaryProfessionalSamples");
        let details = document.getElementById("samples");
        if(!details.hasAttribute("open")) summary.click();
    }
}