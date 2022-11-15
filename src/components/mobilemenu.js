import React from "react";
import { MobileMenuItem } from "./menuitem";

export default class MobileMenu extends React.Component
{
    render()
    {
        return(
            <nav className={"menu"}>
                    <button id="hamburgerButton" className={"nav-toggle fas fa-bars"} style={{borderTop: "none"}} onClick={this.showOrHideList}>
                        {/* <i id="hamburgerITag" className={"fas fa-bars"}></i> */}
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
            </nav>
        );
    }

    componentDidMount()
    {
        const hamburgerList = document.getElementById("hamburgerList");
        hamburgerList.hidden = true;
        document.addEventListener("click", (e) => {
            const hamburgerButton = document.getElementById("hamburgerButton");
            let clickedElement = e.target;
            if(clickedElement !== hamburgerButton) hamburgerList.hidden = true;
        });
    }

    showOrHideList = () => 
    {
        let hamburgerList = document.getElementById("hamburgerList");
        if(hamburgerList.hidden === true) hamburgerList.hidden = false;
        else hamburgerList.hidden = true;
    }
}