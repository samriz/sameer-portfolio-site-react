import React from "react";
import { HashLink } from 'react-router-hash-link';

class MenuItem extends React.Component
{
    render() {return (<HashLink className={this.props.className} smooth to={this.props.href}>{this.props.text}</HashLink>);}
}

/* export class MobileMenuItem extends React.Component
{
    render() {return (<HashLink className={"mobileMenuItem"} smooth to={this.props.href}>{this.props.text}</HashLink>);}
} */

export class DesktopMenuItem extends React.Component
{
    render() {
        return (
            <MenuItem 
                className="menuItem" 
                href={this.props.href} 
                text={this.props.text}
            />
        );
    }
}

export class MobileMenuItem extends React.Component
{
    render() {
        return (
            <MenuItem 
                className="mobileMenuItem" 
                href={this.props.href} 
                text={this.props.text}
            />
        );
    }
}