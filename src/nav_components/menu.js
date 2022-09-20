import React from "react";
import { Link } from 'react-router-dom';

export class MenuItem extends React.Component
{
    render()
    {
        //return (<a href={this.props.href}>{this.props.text}</a>);
        return (<Link to={this.props.href}>{this.props.text}</Link>);
    }
}

export default class Menu extends MenuItem
{
    renderMenuItem(href, val) {return (<MenuItem href={href} text={val}/>);}

    render()
    {
        return (
          <nav className="menu docked">
            <div id="divMenuItems">
              {this.renderMenuItem("/", "sameer")}
               | 
              {this.renderMenuItem("/about", "about")}
               | 
              {this.renderMenuItem("/contact", "contact")}
            </div>
          </nav>
        );
    }
}