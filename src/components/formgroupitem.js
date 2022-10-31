import React from 'react';
//import $ from "jquery";

export default class FormGroupItem extends React.Component
{
    render()
    {
        return (
            <div className={"form-group ad-textbox"}>
                {this.props.element}
            </div>
        );
    }
}