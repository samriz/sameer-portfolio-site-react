import React from "react";
import { HashLink } from 'react-router-hash-link';

export class MenuItem extends React.Component
{
    render() {return (<HashLink className={"menuItem"} smooth to={this.props.href}>{this.props.text}</HashLink>);}
}

export class MobileMenuItem extends React.Component
{
    render() {return (<HashLink className={"mobileMenuItem"} smooth to={this.props.href}>{this.props.text}</HashLink>);}
}