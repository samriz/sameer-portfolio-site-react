import React from 'react';
import FormGroupItem from "./formgroupitem";

export class FormInput extends React.Component
{
    #inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'];

    render()
    {
        return this.returnInputs();
    }

    returnInputs = () => {

        if(this.#inputTypes.includes(this.props.type.toLowerCase()))
        {
            if(this.props.type.toLowerCase() === "email")
            {
                return (
                    <FormGroupItem
                        element={
                            <>
                                <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                                <div className="underline"/>
                                
                                <span id="spanInvalidEmail" style={{color: "red"}} hidden={true}><br></br><small>&nbsp;<i>Invalid Email</i></small></span>
                            </>
                        }
                    />        
                );
            }
            else if(this.props.type.toLowerCase() === "textarea")
            {
                return (
                    <FormGroupItem
                        element={
                            <>
                                <textarea id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                                <div className="underline"/>
                            </>
                        }
                    />
                );
            }
            else
            {
                return (
                    <FormGroupItem
                        element={
                            <>
                                <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
                                <div className="underline"/>
                            </>
                        }
                    />        
                );
            }
        }
        else
        {
            return (
                <FormGroupItem
                    element={
                        <>
                            <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} minLength={this.props.minLength} maxLength={this.props.maxLength}/>
                            <div className="underline"/>
                        </>
                    }
                />        
            );
        }
    }

    /**
    * @param {string} type
    * @returns boolean
    */
    isInputTypeValid = (type) => { return this.#inputTypes.includes(type.toLowerCase()); }
}

/* export class EmailFormInput extends React.Component
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
                        <input type={"email"} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={`${this.state.value ? "has-value form-control" : "form-control"}`} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
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
                        <textarea id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className={`${this.state.value ? "has-value form-control" : "form-control"}`} rows={this.props.rows} cols={this.props.cols} minLength={this.props.minLength} maxLength={this.props.maxLength} onChange={this.handleChange}/>
                        <div className={"underline"}/>
                    </>
                }
            />
        );
    }

    handleChange = (e) => this.setState({value: e.target.value});
} */