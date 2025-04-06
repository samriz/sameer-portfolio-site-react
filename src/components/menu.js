import React from "react";
import { DesktopMenuItem } from "./menuitem";

export default class Menu extends React.Component
{
    //renderMenuItem(href, val) {return (<MenuItem href={href} text={val}/>);}

    render() {
        return (
          <nav className="menu">
            <div id="divMenuItems">
              <DesktopMenuItem
                href="/#home"
                text="sameer"
              />
              <span style={{color: "white"}}>|</span>
              <DesktopMenuItem
                href="/#about"
                text="about"
              />
              <span style={{color: "white"}}>|</span>
              <DesktopMenuItem
                href="/#contact"
                text="contact"
              />
            </div>
          </nav>
        );
    }
}