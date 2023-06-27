import React from 'react';
import Toggle from "./toggle"

export default class LightDark extends React.Component
{
    constructor(props)
    {
        super(props);
        try 
        {
            if(localStorage.getItem("theme") === null | "light") this.state = {isDark: false};
            if(localStorage.getItem("theme") === "dark") this.state = {isDark: true};
        } 
        catch (error) 
        {
            console.log(`error: ${error}`);
            this.state = {isDark: false};
        }
    }

    render()
    {
        return(
            <Toggle dataOff={"Light"} dataOn={"Dark"} toggleFunction={this.changeState}/>
        );
    }

    componentDidMount()
    {
        try 
        {
            if(localStorage.getItem("theme") === null | "light") this.setState({isDark: false}, 
            () => {
                document.getElementById("toggle_switch").checked = false;
                this.applyLightTheme();
            });
            if(localStorage.getItem("theme") === "dark") this.setState({isDark: true}, 
            () => {
                document.getElementById("toggle_switch").checked = true;
                this.applyDarkTheme();
            });
        } 
        catch (error) 
        {
            console.log(`error: ${error}`);
            this.setState({isDark: false});
            document.getElementById("toggle_switch").checked = false;
            this.applyLightTheme();
        }
    }

    /**
     * @param {Event} e 
     */
    changeState = (e) => 
    {
        this.setState({isDark: e.target.checked},
            () => {
                //this callback is executed when isDark has finally been updated
                this.changeTheme();
            });
    }

    changeTheme = () => 
    {
        if(this.state.isDark)
        {
            this.applyDarkTheme();
            try 
            {
                localStorage.setItem("theme", "dark");
            } 
            catch (error) 
            {
                console.log(`error: ${error}`);
            }
        }
        else
        {
            this.applyLightTheme();
            try 
            {
                localStorage.setItem("theme", "light");
            } 
            catch (error) 
            {
                console.log(`error: ${error}`);
            }
        }
    }

    applyDarkTheme = () => {this.applyTheme("black", "white");}

    applyLightTheme = () => {this.applyTheme("white", "black");}

    /**
     * @param {string} backgroundColor 
     * @param {string} contentsColor 
     */
    applyTheme = (backgroundColor, contentsColor) => 
    {
        let allButFooter = document.getElementsByClassName("allButFooter");        
        for(let i = 0; i < allButFooter.length; i++)
        {
            let allButFooterChildren = allButFooter[i].children;
            for(let j = 0; j < allButFooterChildren.length; j++)
            {
                if(!allButFooterChildren[j].classList.contains("intro")) allButFooter[i].style.backgroundColor = backgroundColor;
            }
        }

        let contents = document.getElementsByClassName("contents");
        for(let i = 0; i < contents.length; i++)
        {
            contents[i].style.color = contentsColor;
        }
    }
}