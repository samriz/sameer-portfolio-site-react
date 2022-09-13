import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import PageTemplate from './page_components';

const IndexPage = () => {
    return (<PageTemplate 
    intro_content={<h1>Sameer Rizvi</h1>}
    main_content={
        <>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
            <ul>
                <li>My <a href="./misc/SameerRizviResume.pdf" title="Resume" target="_blank" rel="author">resume <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg></a>.</li>
                <li>An <a href="./about.html" title="About" rel="author">about</a> page, detailing my academic and professional history.</li>
                <li>My <a href="https://github.com/samriz" target="_blank" title="GitHub" rel="noopener noreferrer">GitHub</a>.</li>
                <li>A way to <a href="./contact.html" title="Contact" rel="author">contact</a> me.</li>
                <li><a href="./about.html#summaryWorkSamples">Links</a> to some of my professional work.</li>
            </ul>
        </>
    }
/>)
};

//export default IndexPage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(IndexPage());