import React from 'react';
//import $ from "jquery";

export default class FormGroupItem extends React.Component
{
    render()
    {
        return (
            <div className={"form-group"}>
                {this.props.element}
            </div>
        );
    }
}