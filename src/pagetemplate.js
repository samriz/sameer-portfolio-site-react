import React from 'react';
import Menu from "./menu.js";
import Footer from "./footer.js";

class Intro extends React.Component
{
    render()
    {
        return (<main className="intro">{this.props.content}</main>);
    }
}

class PageTemplate extends React.Component
{
    render()
    {
        return (
          <>
            <div className="allButFooter">
              <Menu />
              <Intro content={<h1>Sameer Rizvi</h1>} />
              <div className="contentsdiv"></div>
            </div>
            <Footer />
          </>
        );
    }
}

export default PageTemplate;