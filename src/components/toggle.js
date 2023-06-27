import React from 'react';
import "../styles/toggle.css";

export default class Toggle extends React.Component
{
    render()
    {
        return(
            <>
                <label className="toggle">
                    <input type="checkbox" id="toggle_switch" className="toggle-input" onClick={this.props.toggleFunction}/>
                    <span className="toggle-label" data-off={this.props.dataOff} data-on={this.props.dataOn}></span>
                    <span className="toggle-handle"></span>
                </label>
            </>
        );
    }
}