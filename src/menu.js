//import React from "react";
import MenuItem from "./menuitem"
//import ReactDOM from "react-dom/client";


export default class Menu extends MenuItem
{
    renderMenuItem(href, val)
    {
        return (
          <MenuItem href={href} text={val}>
            {this.props.text}
          </MenuItem>
        );
    }

    render()
    {
        return (
          <nav className="menu docked">
            <div id="divMenuItems">
              {this.renderMenuItem("index.html", "sameer rizvi")}
               | 
              {this.renderMenuItem("about.html", "about")}
               | 
              {this.renderMenuItem("contact.html", "contact")}
            </div>
          </nav>
        );
    }
}