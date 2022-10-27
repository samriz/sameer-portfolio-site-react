import React from 'react';
import jqueryConfirm from "./modal";
import {FormInput, EmailFormInput, FormTextArea} from "./forminputs";

export default class ContactForm extends React.Component
{  
    constructor(props)
    {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    render()
    {
        const { name, email, message } = this.state;
        return (
        <form id={"contactForm"} name={"contact"} onSubmit={this.formSubmit}>
            <table id={"contactTable"}>
                <tbody>
                <tr>
                    <td>
                        <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} value={name} onChange={this.handleChange}/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <EmailFormInput name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} value={email} onChange={this.handleChange}/>                        
                    </td> 
                </tr>
                <tr>
                    <td>
                        <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} value={message} onChange={this.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type={"submit"} className={"btn btn-outline-secondary"}>Send</button>
                    </td>
                </tr>
                </tbody>             
            </table>
            <input type="hidden" name="form-name" value="contact"/>
        </form>);
    }

    componentDidMount()
    {
        document.getElementById("contactName").required = true;
        document.getElementById("contactEmail").required = true;
        document.getElementById("contactMessage").required = true;
    }

    /**
     * @param {Event} e
    */
    formSubmit = async (e) => 
    {
        e.preventDefault();
        let name = document.getElementById("contactName");
        let email = document.getElementById("contactEmail");
        let message = document.getElementById("contactMessage");

        if(this.isValid(name, 100) && this.isValidEmail(email.value) && this.isValid(message, 1000))
        {
            let form = document.getElementById("contactForm");
            let formData = new FormData(form);

            /* for (const value of formData.values()) 
            {
                console.log(value);
            } */
            
            let response = await fetch("/", {
                method: "POST",
                body: formData
            });

            let modal;
            if(response.ok) 
            {
                name.value = "";
                email.value = "";
                message.value = "";
                this.setState({name: "", email: "", message: ""});

                modal = jqueryConfirm("Message sent!");
            }
            else modal = jqueryConfirm("Message could not be sent.");
            
            modal.open();
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    /**
    * @param {HTMLElement} elem
    * @param {number} maxLength
    * @returns boolean
    */
    isValid = (elem, maxLength) =>
    {
        let validName = false;
        if(elem.value.length > 2 || elem.value.length < maxLength) validName = true;

        return validName;
    }

    /**
    * @param {string} email
    * @returns boolean
    */
    isValidEmail = (email) =>
    {            
        let validEmail = false;
        let indexOfAt = 0;
        let indexOfDot = 0;

        if(email.includes('@')) indexOfAt = email.search('@');
        if(email.includes('.')) indexOfDot = email.indexOf('.');
        if(indexOfDot > indexOfAt + 1) validEmail = true;

        let span = document.getElementById("spanInvalidEmail");

        if(validEmail === false) span.hidden = false;
        else span.hidden = true;

        return validEmail;
    }
}