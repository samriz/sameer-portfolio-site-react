import React from 'react';
import Menu from "./nav_components/menu.js";
import Footer from "./footer.js";

export class Intro extends React.Component
{
    //constructor(props){super(props);}
    render()
    {
        return (<main className="intro jumbotron">{this.props.content}</main>);
    }
}

export default class PageTemplate extends React.Component
{
    //constructor(props){super(props);}
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