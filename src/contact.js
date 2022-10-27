import React from 'react';
import PageTemplate from "./pagetemplate";
import ContactForm from "./components/contactform";

/*class TableForm extends React.Component
{
    render()
    {
        return(
            `<table id="contacttable">
                <tbody>
                    <form id="contactForm" action="">
                    <tr>                        
                        <td colspan="1">
                            <input type="text" name="name" id="contactName" placeholder="Name" class="form-control" minlength="2" maxlength="100" oninput="if(this.value.length < 2 || this.value.length > 100) {this.style.borderColor = 'red'; this.style.borderWidth = '2px';} else {this.style.borderColor = 'green'; this.style.borderWidth = '2px';}"/>
                        </td>
                        <td id="tdEmail" colspan="1">
                            <input type="email" name="email" id="contactEmail" placeholder="Email" class="form-control" minlength="2" maxlength="50"/>
                        </td>
                    </tr>
                    <tr>
                        <td id="messagetd" colspan="2">
                            <textarea name="message" id="contactMessage" placeholder="Message" class="form-control" rows="5" cols="50" minlength="2" maxlength="1000" oninput="if(this.value.length < 2 || this.value.length > 1000) {this.style.borderColor = 'red'; this.style.borderWidth = '2px';} else {this.style.borderColor = 'green'; this.style.borderWidth = '2px';}"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td id="tdSend">
                            <button type="submit" id="btnSend" class="btn btn-outline-secondary">Send</button>                            
                        </td>
                    </tr>
                    </form>
                </tbody>
            </table>`
        );
    }
}*/

export default class Contact extends React.Component
{
    render()
    {
        return (
            <PageTemplate intro_id={"contact"}
                intro_content={<h1>Contact Me</h1>}
                main_content={
                    <>
                        <p style={{textAlign:"center",}}>To contact me, please fill out and submit the form below.</p>
                        {/* <TableForm/> */}
                        <ContactForm/>
                    </>
                }
            />
        );
    }
}