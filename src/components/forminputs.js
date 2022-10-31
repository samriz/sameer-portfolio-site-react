import React from 'react';
import FormGroupItem from "./formgroupitem";

export class FormInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ""};
    }

    render()
    {
        return (
            <FormGroupItem
                element={
                    <>
                        <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={`${this.state.value ? "has-value form-control" : "form-control"}`} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
                        <div className={"underline"}/>
                    </>
                }
            />        
        );
    }

    handleChange = (e) => this.setState({value: e.target.value});
}

export class EmailFormInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ""};
    }

    render()
    {
        return (
            <FormGroupItem
                element={
                    <>
                        <input type={"email"} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={`${this.state.value ? "has-value form-control" : "form-control"}`} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
                        <div className={"underline"}/>
                        
                        <span id={"spanInvalidEmail"} style={{color: "red"}} hidden={true}><br></br><small>&nbsp;<i>Invalid Email</i></small></span>
                    </>
                }
            />        
        );
    }

    handleChange = (e) => this.setState({value: e.target.value});
}

export class FormTextArea extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ""};
    }

    render()
    {
        return (
            <FormGroupItem
                element={
                    <>
                        <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} className={`${this.state.value ? "has-value form-control" : "form-control"}`} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
                        {/* <span className={"material-symbols-outlined"}>message</span> */}
                        {/* <label htmlFor="textbox">Message</label> */}
                        <div className={"underline"}/>
                    </>
                }
            />
        );
    }

    handleChange = (e) => this.setState({value: e.target.value});
}
