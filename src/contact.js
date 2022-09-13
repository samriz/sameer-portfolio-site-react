import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import PageTemplate from './page_components';

/*const root = ReactDOM.createRoot(document.getElementById("rootContact"));
root.render();*/

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
                            <td colspan="1">
                                <input type="text" name="name" id="contactName" placeholder="Name" class="form-control" minlength="2" maxlength="100" oninput="if(this.value.length < 2 || this.value.length > 100) {this.style.borderColor = 'red'; this.style.borderWidth = '2px';} else {this.style.borderColor = 'green'; this.style.borderWidth = '2px';}"/>
                            </td>
                            <td id="tdEmail" colspan="1">
                                <input type="email" name="email" id="contactEmail" placeholder="Email" class="form-control" minlength="2" maxlength="50" onclick="console.log(getComputedStyle(this).borderColor);console.log(getComputedStyle(this).borderWidth);" oninput="isValidEmail(this.value)"/>
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
                </table>
            </>
        }
    />
    );
};

//export default ContactPage;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ContactPage());