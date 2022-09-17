import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
//import { useState } from 'react';

export class FormInput extends React.Component
{
    //constructor(props){super(props);}
    render()
    {
        return (<input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minlength} maxLength={this.props.maxlength} onInput={this.props.oninput}/>);
    }
}

export class FormTextArea extends React.Component
{
    //constructor(props){super(props);}
    render()
    {
        return (<textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minlength} maxLength={this.props.maxlength} onInput={this.props.oninput}></textarea>);
    }
}

export default class ContactForm extends React.Component
{
    //constructor(props){super(props);}
    nameOnInput = () => {
        if(this.value.length < 2 || this.value.length > 100) 
        {
            this.style.borderColor = 'red'; 
            this.style.borderWidth = '2px';
        }
        else 
        {
            this.style.borderColor = 'green';
            this.style.borderWidth = '2px';
        }
    }

    emailOnInput = () => {
        let validEmail = false;
        let indexOfAt = 0;
        let indexOfDot = 0;

        if(this.value.includes('@')) indexOfAt = this.value.search('@');
        if(this.value.includes('.')) indexOfDot = this.value.indexOf('.');
        if(indexOfDot > indexOfAt + 1) validEmail = true;
        if(validEmail)
        {
            document.getElementById("contactEmail").style.borderColor = "green";
            document.getElementById("contactEmail").style.borderWidth = "2px";
        }
        else
        {
            document.getElementById("contactEmail").style.borderColor = "red";
            document.getElementById("contactEmail").style.borderWidth = "2px";
        }
        return validEmail;
    };

    messageOnInput = () => {
        if(this.value.length < 2 || this.value.length > 1000) 
        {
            this.style.borderColor = 'red'; 
            this.style.borderWidth = '2px';
        } 
        else 
        {
            this.style.borderColor = 'green';
            this.style.borderWidth = '2px';
        }
    }

    render()
    {
        return (
        <>
            <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} onInput={this.nameOnInput}/>
            <FormInput  type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} onInput={this.emailOnInput}/>
            <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={""} rows={5} cols={50} minLength={2} maxLength={1000} onInput={this.messageOnInput}/>
        </> 
        );
    }
}