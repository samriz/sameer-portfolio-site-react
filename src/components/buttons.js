import React from 'react';

export class DownloadButton extends React.Component
{
    render()
    {
        return (<button className={"leftPad roundedCorners"}><a href={this.props.file} download>{this.props.buttonText}</a></button>);
    }
}