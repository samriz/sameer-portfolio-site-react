import React from "react";
import MenuItem from "./menuitem"

export default class Menu extends MenuItem
{
    renderMenuItem(href, val)
    {
        return (<MenuItem href={href} text={val}/>);
    }

    render()
    {
        return (
          <nav className="menu docked">
            <div id="divMenuItems">
              {this.renderMenuItem("/index", "sameer")}
               | 
              {this.renderMenuItem("/about", "about")}
               | 
              {this.renderMenuItem("/contact", "contact")}
            </div>
          </nav>
        );
    }
}