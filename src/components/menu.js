import React from "react";
import { MenuItem } from "./menuitem";

export default class Menu extends React.Component
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