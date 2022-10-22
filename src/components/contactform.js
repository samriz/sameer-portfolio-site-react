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
            <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
        );
    }
}

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
            <table id="contactTable">
                <tbody>
                <tr>
                    <td colSpan={2}>
                        <div className={"form-group"}>
                            <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} value={name} onChange={this.handleChange}/>
                        </div>
                    </td>                                       
                </tr>
                <tr>
                    <td colSpan={2}>
                        <div className="form-group">
                            <FormInput type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} value={email} onChange={this.handleChange}/>
                            <span id={"spanInvalidEmail"} style={{color: "red"}} hidden={true}><small>&nbsp;<i>Invalid Email</i></small></span>
                        </div>                        
                    </td> 
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} value={message} onChange={this.handleChange}/>
                        </div>
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

    componentDidMount()
    {
        document.getElementById("contactName").required = true;
        document.getElementById("contactEmail").required = true;
        document.getElementById("contactMessage").required = true;
    }

    /**
     * @param{Event} e
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
            if(response.ok) 
            {
                name.value = "";
                email.value = "";
                message.value = "";
                this.setState({name: "", email: "", message: ""});

                alert("Message sent!");
            }
            else alert("Message could not be sent.");           
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    /**
    * @param{HTMLElement} elem
    * @param{number} maxLength
    */
    isValid = (elem, maxLength) =>
    {
        let validName = false;
        if(elem.value.length > 2 || elem.value.length < maxLength) validName = true;

        return validName;
    }

    /**
    * @param{string} email
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