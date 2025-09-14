import React from 'react';
import "./icons";
import { GitHubIcon, LinkedInIcon } from './icons';

export default class SocialMediaBanner extends React.Component
{
    render()
    {
        return (
            <div>
                <a href="https://www.linkedin.com/in/sameer-r-bb788375/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedInIcon/>
                </a>
                &nbsp;
                <a href="https://github.com/samriz" target="_blank" rel="noopener noreferrer" title="GitHub">
                <GitHubIcon/>
                </a>
            </div>
        );
    }
}