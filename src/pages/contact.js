import React from 'react';
import PageTemplate from "../pagetemplate";
import ContactForm from "../components/contactform";

export default class ContactPage extends React.Component
{
    render()
    {
        return (<PageTemplate 
            intro_content={<h1>Contact Me</h1>}
            main_content={<ContactForm/>}
        />);
    }
}