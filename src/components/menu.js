import React from "react";
import { HashLink } from 'react-router-hash-link';

export class MenuItem extends React.Component
{
    render() {return (<HashLink className={"menuItem"} smooth to={this.props.href}>{this.props.text}</HashLink>);}
}

export default class Menu extends MenuItem
{
    //renderMenuItem(href, val) {return (<MenuItem href={href} text={val}/>);}

    render()
    {
        return (
          <nav className="menu">
            <div id="divMenuItems">
              <MenuItem
                href={"/#home"}
                text={"sameer"}
              />
              <span style={{color: "white"}}>|</span>
              <MenuItem
                href={"/#about"}
                text={"about"}
              />
              <span style={{color: "white"}}>|</span>
              <MenuItem
                href={"/#contact"}
                text={"contact"}
              />
            </div>
          </nav>
        );
    }
}