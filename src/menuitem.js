import React from "react";

class MenuItem extends React.Component
{
    render()
    {
        return (<a href={this.props.href}>{this.props.text}</a>);
    }
}

export default MenuItem;