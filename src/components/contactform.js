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
        <form name="contact" netlify>
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
        </form>);
    }
}