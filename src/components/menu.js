import React from "react";
import { HashLink } from 'react-router-hash-link';

export class MenuItem extends React.Component
{
    render() {return (<HashLink to={this.props.href}>{this.props.text}</HashLink>);}
}

export default class Menu extends MenuItem
{
    //renderMenuItem(href, val) {return (<MenuItem href={href} text={val}/>);}

    render()
    {
        return (
          <nav className="menu sticky">
            <div id="divMenuItems">
              <MenuItem
                href={"/#home"}
                text={"sameer"}
              />
              |
              <MenuItem
                href={"/#about"}
                text={"about"}
              />
              |
              <MenuItem
                href={"/#contact"}
                text={"contact"}
              />
            </div>
          </nav>
        );
    }
}