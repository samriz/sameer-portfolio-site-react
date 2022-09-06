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
          <div>
              <div className="allButFooter"><Menu/></div>

              <Footer/>
          </div>
        );
    }
}

export default PageTemplate;