import React from 'react';

export class Intro extends React.Component
{
    render() 
    {
        return (<div id={this.props.header_id} className="intro jumbotron">{this.props.content}</div>);
    }
}

export default class PageTemplate extends React.Component
{
    render()
    {
        return (     
            <div className="allButFooter">
                <Intro header_id={this.props.intro_id} content={this.props.intro_content}/>
                <main id={this.props.main_id} className="contents">{this.props.main_content}</main>
            </div>
        );
    }
}