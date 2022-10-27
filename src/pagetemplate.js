import React from 'react';

export class Intro extends React.Component
{
    render() 
    {
        return (<main id={this.props.header_id} className="intro jumbotron">{this.props.content}</main>);
    }
}

export default class PageTemplate extends React.Component
{
    render()
    {
        return (        
            <div className="allButFooter">
                <Intro header_id={this.props.intro_id} content={this.props.intro_content}/>
                <div className="contentsdiv">{this.props.main_content}</div>
            </div>
        );
    }
}