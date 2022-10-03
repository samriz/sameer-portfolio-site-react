import React from 'react';
import PageTemplate from "../pagetemplate";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import resume from "./SameerRizviResume.pdf";

export default class HomePage extends React.Component
{
    render()
    {
        return (
            <PageTemplate 
                intro_content={<h1>Sameer Rizvi</h1>}
                main_content={this.homepageBody()}
            />);
    }

    homepageBody()
    {
        return(
        <div className={"leftPad"}>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
            <ul>
                <li>My <Link to={resume} title={"Resume"} target={"_blank"} rel={"author"}>resume <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg></Link>.</li>
                <li>An <Link to={"/about"} title="About" rel="author">about</Link> page, detailing my academic and professional history.</li>
                <li>My <a href={"https://github.com/samriz"} target={"_blank"} title={"GitHub"} rel={"noopener noreferrer"}>GitHub</a>.</li>
                {/* <li>A way to <Link to={"/contact"} title={"Contact"} rel={"author"}>contact</Link> me.</li> */}
                <li><Link to={"/about#summaryWorkSamples"}>Links</Link> to some of my professional work.</li>
            </ul>
        </div>);
    }   
}