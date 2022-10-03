import React from 'react';
//import $ from "jquery";

export class FormInput extends React.Component
{
    render()
    {
        return (
            <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minLength} maxLength={this.props.maxLength} onInput={this.props.onInput}/>
        );
    }
}

export class FormTextArea extends React.Component
{
    render()
    {
        return (
            <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength} onInput={this.props.onInput}>
            </textarea>
        );
    }
}

export default class ContactForm extends React.Component
{  
    render()
    {
        return (
        <form id="contactForm" action="https://getform.io/f/7f565008-7e7c-4d62-9f66-8ccab6c4f51f">
            <table id="contacttable">
                <tbody>
                <tr>
                    <td colSpan={2}>
                        <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} onInput={this.nameOnInput} onFocus={this.getBorderColor} style={{textAlign: 'center'}} required/>
                        {/* <FormInput type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} onInput={this.emailOnInput()} required/> */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormInput type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} onInput={this.emailOnInput} style={{textAlign: 'center'}} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} onInput={this.messageOnInput} required/>
                    </td>
                </tr>
                <tr>
                    <td id="tdSend">
                        <button type={"submit"} id={"btnSend"} className={"btn btn-outline-secondary"}>Send</button>                            
                    </td>
                </tr>
                </tbody>             
            </table>
        </form>);
    }

    getBorderColor = () => {
        let contactName  = getComputedStyle(document.getElementById("contactName"));
        console.log(contactName.borderColor);        
    }

    nameOnInput = () => {
        console.log(`this.value: ${this.value}`);
        let contactName = document.getElementById("contactName");
        if(contactName.value.length < 2 || contactName.value.length > 100) 
        {
            contactName.style.borderColor = 'red'; 
            contactName.style.borderWidth = '2px';
        }
        else 
        {
            contactName.style.borderColor = 'green';
            contactName.style.borderWidth = '2px';
        }
    }

    emailOnInput()
    {
        let contactEmail = document.getElementById("contactEmail");
        let validEmail = false;
        let indexOfAt = 0;
        let indexOfDot = 0;

        if(contactEmail.value.includes('@')) indexOfAt = contactEmail.value.search('@');
        if(contactEmail.value.includes('.')) indexOfDot = contactEmail.value.indexOf('.');
        if(indexOfDot > indexOfAt + 1) validEmail = true;
        if(validEmail)
        {
            contactEmail.style.borderColor = "green";
            contactEmail.style.borderWidth = "2px";
        }
        else
        {
            contactEmail.style.borderColor = "red";
            contactEmail.style.borderWidth = "2px";
        }
        return validEmail;
    }

    messageOnInput() 
    {
        let contactMessage = document.getElementById("contactMessage");
        if(contactMessage.value.length < 2 || contactMessage.value.length > 1000) 
        {
            contactMessage.style.borderColor = 'red'; 
            contactMessage.style.borderWidth = '2px';
        } 
        else 
        {
            contactMessage.style.borderColor = 'green';
            contactMessage.style.borderWidth = '2px';
        }
    }

    /*componentDidMount()
    {
        var form = document.getElementById("contactForm");
        form.onsubmit = this.formSubmit;
    }

    async formSubmit(e) 
    {
        e.preventDefault();
        let name = document.getElementById("contactName");
        let email = document.getElementById("contactEmail").value;
        let message = document.getElementById("contactMessage");

        if(this.isValid(name, 100) && this.isValidEmail(email) && this.isValid(message, 1000))
        {
            const formData = new FormData(document.getElementById("contactForm"));
            const response = await fetch("https://getform.io/f/7f565008-7e7c-4d62-9f66-8ccab6c4f51f",
            {
                method: "POST",
                body: formData,
            });

            if(response.ok)
            {
                $("#divForm").hide();
                $("#submitSuccess").show();
            }
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
    }*/
}