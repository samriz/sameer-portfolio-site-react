import React from "react";
import MenuItem from "./menuitem"
//import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
/*import IndexPage from "../index";
import AboutPage from "../about";
import ContactPage from "../contact";*/

export default class Menu extends MenuItem
{
    renderMenuItem(href, val)
    {
        return (<MenuItem href={href} text={val}/>);
    }

    render()
    {
        return (
          //<Router>
          <nav className="menu docked">
            <div id="divMenuItems">
              {this.renderMenuItem("/index", "sameer")}
               | 
              {this.renderMenuItem("/about", "about")}
               | 
              {this.renderMenuItem("/contact", "contact")}
            </div>
          </nav>

          //</Router>
        );
    }
}