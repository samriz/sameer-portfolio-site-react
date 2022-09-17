import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";
import PageTemplate from "../pagetemplate";
import ContactForm from "./page_components/contactform";
//import "./page_scripts/contactScript";

export default class ContactPage extends React.Component
{
    //constructor(props){super(props);}
    // This syntax ensures 'this' is bound within event handlers.
    /* nameOnInput = () => {
        console.log('this is:', this);
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
    }; */

    render()
    {
        return (
            <PageTemplate 
            intro_content={<h1>Contact Me</h1>}
            main_content={
                <ContactForm/>
            }
            /* main_content={
                <>
                    <p>To contact me, please fill out and submit the form below.</p>      
                    <table id={"contacttable"}>
                        <tbody>
                            <form id={"contactForm"} action={""}>
                            <tr>                        
                                <td colSpan={1}>
                                    <input type={"text"} name={"name"} id={"contactName"} placeholder={"Name"} className={"form-control"} minLength={2} maxLength={100} onInput={this.nameOnInput}/>
                                </td>
                                <td id={"tdEmail"} colSpan={1}>
                                    <input type={"email"} name={"email"} id={"contactEmail"} placeholder={"Email"} className={"form-control"} minLength={2} maxLength={50} onInput={this.emailOnInput}/>
                                </td>
                            </tr>
                            <tr>
                                <td id={"messagetd"} colSpan={2}>
                                    <textarea name={"message"} id={"contactMessage"} placeholder={"Message"} className={"form-control"} rows={5} cols={50} minLength={2} maxLength={1000} onInput={this.messageOnInput}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td id="tdSend">
                                    <button type={"submit"} id={"btnSend"} className={"btn btn-outline-secondary"}>Send</button>    
                                </td>
                            </tr>
                            </form>
                        </tbody>
                    </table>
                </>
            } */
        />);
    }
}