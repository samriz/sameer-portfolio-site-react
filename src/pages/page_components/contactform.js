import React from 'react';

export class FormInput extends React.Component
{
    render()
    {
        return (<input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minLength} maxLength={this.props.maxLength} onInput={this.props.onInput}/>);
    }
}

export class FormTextArea extends React.Component
{
    render()
    {
        return (<textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength} onInput={this.props.onInput}>
        </textarea>);
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
                </tbody>             
            </table>
        </form>);
    }

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
    };

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
    };
}