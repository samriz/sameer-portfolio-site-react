import React from 'react';

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
        return (<form id="contactForm" action="">
            <table id="contacttable">
                <tbody>
                <tr>
                    <td>
                        <FormInput type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} onInput={this.nameOnInput}/>
                        <FormInput type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} onInput={this.emailOnInput}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormTextArea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} onInput={this.messageOnInput}/>
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

    nameOnInput = () => {
        //console.log(`this.value: ${this.value}`);
        let contactName = document.getElementById("contactName");
        //console.log(`name: ${contactName.value}`);
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
}