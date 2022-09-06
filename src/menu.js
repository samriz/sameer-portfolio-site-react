//import React from "react";
import MenuItem from "./menuitem.js"
//import ReactDOM from "react-dom/client";


class Menu extends MenuItem
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
          <nav>
            <div>
              {this.renderMenuItem("index.html", "sameer rizvi")}
              {this.renderMenuItem("about.html", "about")}
              {this.renderMenuItem("contact.html", "contact")}
            </div>
          </nav>
        );
    }
}

export default Menu;