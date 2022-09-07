import React from 'react';
import Menu from "./menu.js";
import Footer from "./footer.js";

class Intro extends React.Component
{
    render()
    {
        return (
            <main className="intro jumbotron"></main>
        );
    }
}

class PageTemplate extends React.Component
{
    render()
    {
        return (
            <div className="body">
                <div className="allButFooter">
                    <Menu/>
                    <Intro/>
                    <div className="contentsdiv">
                        <p>Page Template</p>
                    </div>
                </div>                
                <Footer/>
            </div>
        );
    }
}

export default PageTemplate;