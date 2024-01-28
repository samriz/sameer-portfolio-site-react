import React from "react";
import { MobileMenuItem } from "./menuitem";

export default class MobileMenu extends React.Component
{
    render()
    {
        return(
            <nav className={"menu"}>
                <div id={"divMobileMenuItems"}>
                    <button id="hamburgerButton" className={"fas fa-bars"} onClick={this.showOrHideList}>
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
                    </div>
            </nav>
        );
    }

    componentDidMount()
    {
        let hamburgerList = document.getElementById("hamburgerList");
        hamburgerList.hidden = true;

        //add an event listener to the document and if something is clicked on the document and it is not the hamburger button then hide the hamburger list
        document.addEventListener("click", (e) => {
            const hamburgerButton = document.getElementById("hamburgerButton");
            let clickedElement = e.target;
            //if the clicked element is not the hamburger button then hide the hamburger list
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