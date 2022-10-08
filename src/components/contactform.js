import React from 'react';
//import $ from "jquery";

export class FormInput extends React.Component
{
    render()
    {
        return (
            <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
        );
    }
}

export class FormTextArea extends React.Component
{
    render()
    {
        return (
            <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength}>
            </textarea>
        );
    }
}

export default class ContactForm extends React.Component
{  
    render()
    {
        return (
        // <form name="contact" method="post">
        <form id={"contactForm"} onSubmit={this.handleSubmit}>
            <table id="contacttable">
                <tbody>
                <tr>
                    <td>
                        <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} required/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <FormInput type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} required/>
                    </td> 
                </tr>
                <tr>
                    <td>
                        <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} required/>
                    </td>
                </tr>
                <tr>
                    <td id="tdSend">
                        <button type={"submit"} className={"btn btn-outline-secondary"}>Send</button>                            
                    </td>
                </tr>
                </tbody>             
            </table>
            <input type="hidden" name="form-name" value="contact"/>
        </form>);
    }

    handleSubmit = e => 
    {
        e.preventDefault();
        let name = document.getElementById("contactName");
        let email = document.getElementById("contactEmail").value;
        let message = document.getElementById("contactMessage");

        if(this.isValid(name, 100) && this.isValidEmail(email) && this.isValid(message, 1000))
        {
            const formData = new FormData(document.getElementById("contactForm"));

            const response = fetch("/",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData,
            })

            .then(() => alert("Success!"))
            .catch(error => alert(error));

            //if(response.ok) alert("Success!");
            //else alert("Form could not be submitted.");
        }
    }
    isValid(elem, maxLength)
    {
        let validName = false;
        if(elem.value.length < 2 || elem.value.length > maxLength) 
        {
            elem.style.borderColor = 'red'; 
            elem.style.borderWidth = '2px';
        } 
        else 
        {
            elem.style.borderColor = 'green'; 
            elem.style.borderWidth = '2px';
            validName = true;
        }
        return validName;
    }

    /**
    * @param{string} email
    */
    isValidEmail(email)
    {            
        let validEmail = false;
        let indexOfAt = 0;
        let indexOfDot = 0;

        if(email.includes('@')) indexOfAt = email.search('@');
        if(email.includes('.')) indexOfDot = email.indexOf('.');
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
    }
}