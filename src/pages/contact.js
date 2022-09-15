import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";
import PageTemplate from "../page_components";
//import "./page_scripts/contactScript";

const ContactPage = () => {
    return(
        <PageTemplate 
        intro_content={<h1>Contact Me</h1>}
        main_content={
            <>
                <p>To contact me, please fill out and submit the form below.</p>      
                <table id="contacttable">
                    <tbody>
                        <form id="contactForm" action="">
                        <tr>                        
                            <td colSpan="1">
                                <input type="text" name="name" id="contactName" placeholder="Name" className="form-control" minLength="2" maxLength="100" onInput="if(this.value.length < 2 || this.value.length > 100) {this.style.borderColor = 'red'; this.style.borderWidth = '2px';} else {this.style.borderColor = 'green'; this.style.borderWidth = '2px';}"/>
                            </td>
                            <td id="tdEmail" colSpan="1">
                                <input type="email" name="email" id="contactEmail" placeholder="Email" className="form-control" minLength="2" maxLength="50" onClick="console.log(getComputedStyle(this).borderColor);console.log(getComputedStyle(this).borderWidth);" onInput="isValidEmail(this.value)"/>
                            </td>
                        </tr>
                        <tr>
                            <td id="messagetd" colSpan="2">
                                <textarea name="message" id="contactMessage" placeholder="Message" className="form-control" rows="5" cols="50" minLength="2" maxLength="1000" onInput="if(this.value.length < 2 || this.value.length > 1000) {this.style.borderColor = 'red'; this.style.borderWidth = '2px';} else {this.style.borderColor = 'green'; this.style.borderWidth = '2px';}"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td id="tdSend">
                                <button type="submit" id="btnSend" className="btn btn-outline-secondary">Send</button>                            
                            </td>
                        </tr>
                        </form>
                    </tbody>
                </table>
            </>
        }
    />
    );
};

export default ContactPage;