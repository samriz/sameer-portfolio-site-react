import React from 'react';
import jQueryConfirm from "./modal";
import {FormInput} from "./forminputs";
import {EmailRegex} from "../constants/regex";

export default class ContactForm extends React.Component
{  
    constructor(props)
    {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    render()
    {
        return (
        <form id={"contactForm"} name={"contact"} onSubmit={this.formSubmit}>
            <table id={"contactTable"}>                
                <tr>
                    <td>
                        <FormInput type="text" id="contactName" name="name" placeholder="Name" minLength={2} maxLength={100}/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <FormInput type="email" id="contactEmail" name="email" placeholder="Email" minLength={2} maxLength={50}/>
                    </td> 
                </tr>
                <tr id={"trPhone"}>
                    <td>
                        <input type="tel" id="contactPhone" name="phone" placeholder="Phone" className="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormInput type="textarea" id="contactMessage" name="message" placeholder="Message" className="form-control" rows={5} cols={50} minLength={2} maxLength={1000}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" className="btn btn-outline-secondary">Send</button>
                    </td>
                </tr>                             
            </table>       
            <input type="hidden" name="form-name" value="contact"/>
        </form>);
    }

    componentDidMount()
    {
        document.getElementById("contactName").required = true;
        document.getElementById("contactEmail").required = true;
        document.getElementById("contactMessage").required = true;
        document.getElementById("trPhone").hidden = true;
    }

    /**
     * @param {Event} e
    */
    formSubmit = async (e) => 
    {
        e.preventDefault();
        let nameInput = document.getElementById("contactName");
        let emailInput = document.getElementById("contactEmail");
        let messageInput = document.getElementById("contactMessage");

        this.setState({name: nameInput.value, email: emailInput.value, message: messageInput.value});

        if(document.getElementById("contactPhone").value.length === 0)
        {
            if(this.isValid(nameInput, 100) && this.isValidEmail(emailInput.value) && this.isValid(messageInput, 1000))
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

                let modal = new jQueryConfirm();
                if(response.ok) 
                {
                    nameInput.value = "";
                    emailInput.value = "";
                    messageInput.value = "";
                    this.setState({name: "", email: "", message: ""});

                    modal.setModalContent("Message sent!");
                }
                else modal.setModalContent("Message could not be sent.");
            
                modal.createModal();
                modal.getModal().open();
            }
        }        
    }  

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
        //let indexOfAt = 0;
        //let indexOfDot = 0;

        if(typeof email === "string")
        {
            /* if(email.includes('@')) indexOfAt = email.search('@');
            if(email.includes('.')) indexOfDot = email.indexOf('.');
            if(indexOfDot > indexOfAt + 1) validEmail = true; */
            validEmail = EmailRegex.test(email);
            console.log("Valid email: " + validEmail);
        }

        let span = document.getElementById("spanInvalidEmail");
        //if(validEmail === false) span.hidden = false;
        //else span.hidden = true;        
        span.hidden = validEmail;

        return validEmail;
    }
}