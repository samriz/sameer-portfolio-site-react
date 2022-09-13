import React from "react";
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default class MenuItem extends React.Component
{
    render()
    {
        return (<a href={this.props.href}>{this.props.text}</a>);
        //return (<Link to={this.props.href}>{this.props.text}</Link>);
    }
}