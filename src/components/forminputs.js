import React from 'react';
import FormGroupItem from "./formgroupitem";

export class FormInput extends React.Component
{
    render()
    {
        return (
            <FormGroupItem
                element={
                    <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                }
            />        
        );
    }
}

export class EmailFormInput extends React.Component
{
    render()
    {
        return (
            <FormGroupItem
                element={
                    <>
                        <input type={"email"} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                        {/* &nbsp; */}
                        <span id={"spanInvalidEmail"} style={{color: "red"}} hidden={true}><small>&nbsp;<i>Invalid Email</i></small></span>
                    </>
                }
            />        
        );
    }
}

export class FormTextArea extends React.Component
{
    render()
    {
        return (
            <FormGroupItem
                element={
                    <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                }
            />
        );
    }
}
