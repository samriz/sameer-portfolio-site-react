import React from 'react';
import Menu from "./menu.js";
import Footer from "./footer.js";

class Intro extends React.Component
{
    render()
    {
        return (<main className="intro jumbotron">{this.props.content}</main>);
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
              <Intro content={this.props.intro_content} />
              <div className="contentsdiv">{this.props.main_content}</div>
            </div>
            <Footer />
          </>
        );
    }
}

export default PageTemplate;