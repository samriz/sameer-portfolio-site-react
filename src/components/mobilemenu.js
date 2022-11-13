import React from "react";
import { MobileMenuItem } from "./menuitem";
//import $ from "jquery";

export default class MobileMenu extends React.Component
{
    render()
    {
        return(
            <nav className={"menu"}>
                {/* <div id="divMenuItems"> */}
                    <button id="hamburgerButton" className={"nav-toggle"} onClick={this.showOrHideList}>
                        <i id="hamburgerITag" class="fas fa-bars"></i>
                    </button>
                    <ul id={"hamburgerList"}>
                        <li className={"hamburgerListItem"}>
                            <MobileMenuItem
                                href={"/#home"}
                                text={"sameer"}
                            />
                        </li>
                        <li className={"hamburgerListItem"}>
                            <MobileMenuItem
                                href={"/#about"}
                                text={"about"}
                            />
                        </li>
                        <li className={"hamburgerListItem"}>
                            <MobileMenuItem
                                href={"/#contact"}
                                text={"contact"}
                            />
                        </li>
                    </ul>
                {/* </div> */}
            </nav>
        );
    }

    componentDidMount()
    {
        document.getElementById("hamburgerList").hidden = true;
    }

    showOrHideList = () => 
    {
        let hamburgerList = document.getElementById("hamburgerList");
        if(hamburgerList.hidden === true) hamburgerList.hidden = false;
        else hamburgerList.hidden = true;
    }
}