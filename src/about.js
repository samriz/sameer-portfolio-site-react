import React from 'react';
import PageTemplate from "./pagetemplate";
import LinkedInPicture from "./misc/LinkedInPicture1.png";
import Resume from "./misc/SameerRizviResume2025.pdf";
import { DownloadButton } from './components/buttons';
import { ExternalUrlArrow } from './components/icons';
import { HashLink } from 'react-router-hash-link';

export default class About extends React.Component
{
    render()
    {
        return (<PageTemplate intro_id={"about"} main_id={"aboutMain"}
        intro_content={
            <>
            <h1>About</h1>
                <>
                    <figure>
                        <img src={LinkedInPicture} id="profilepic" className="center" alt="Sameer Rizvi"/>
                        <figcaption>
                            <HashLink smooth to="/#contact" className="textlink" title="Contact">Contact me</HashLink>
                            <br></br>
                            <a href={"https://www.linkedin.com/in/sameer-r-bb788375/"} target={"_blank"} rel="noreferrer">LinkedIn <ExternalUrlArrow/></a>
                        </figcaption>
                    </figure>
                </>
            </>
        }
        main_content={
            <>
                <div className={"leftPad"} id={"divAboutDetails"}>
                    <details>
                        <summary>Education</summary>
                        <table id="educationtable" cellSpacing="5" cellPadding="5" width="90%" border="0">
                        <tbody>
                            <tr valign="TOP">
                                <td>2021</td> 
                                <td>
                                    Syracuse University &mdash; Syracuse, NY
                                    <br/>              
                                    <strong>M.S. in Computer Science</strong>
                                    <br/>
                                </td>
                            </tr>
                            <tr valign="TOP">
                                <td>2015</td> 
                                <td>
                                    Loyola University Chicago &mdash; Chicago, IL 
                                    <br/>              
                                    <strong>B.S. in Computer Science</strong>, Cum Laude
                                    <br/>
                                </td> 
                            </tr>
                        </tbody>
                        </table>
                    </details>

                    <details>
                        <summary>Professional experience</summary>
                        <table id="employmenttable" cellSpacing="5" cellPadding="5" width="90%" border="0">
                        <tbody>
                            <tr valign="TOP">
                                <td>2022-Present</td> 
                                <td>
                                    <strong>Consilio &mdash; Remote</strong><br/>              
                                    <strong>Software Engineer</strong>
                                    <br/>                        
                                </td>
                            </tr>
                            <tr valign="TOP">
                                <td>2021-2022</td> 
                                <td>
                                    <strong>Spinutech, LLC &mdash; Remote</strong><br/>              
                                    <strong>Web Developer</strong>
                                    <br/>     
                                    <ul>
                                        <li>New development and maintenance of ASP.NET web applications including applications built using MVC and Webforms frameworks; languages that include C#, VB.NET, JavaScript (Vanilla and jQuery), HTML, VBScript, and razor; and MySQL and Microsoft SQL Server databases for data storage</li>
                                        <li>Utilize Git and Subversion for Version Control</li>
                                        <li>Development of custom solutions related to proprietary web-based CMS called “<a href="https://www.spinutech.com/dev/cms/spinternet/" target="_blank" title="Content Management System (CMS) by Spinutech" rel="noopener noreferrer">Spinternet</a>”</li>
                                        <li>Coordinate with Project Managers to deliver products and solutions to clients</li>
                                        <li>Collaborate with other developers/team members to improve efficiency and timely delivery of solutions</li>
                                        <li>Write clean, consistent code matching established guidelines and patterns</li>
                                        <li>Leverage work, from website maintenance tasks to new development on existing sites, for several different clients and deliver quality solutions within deadlines</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr valign="TOP">
                                <td>2018</td> 
                                <td>
                                    <strong>American Hotel Register Company &mdash; Vernon Hills, IL</strong><br/>              
                                    <strong>Junior Software Developer</strong>
                                    <br/>     
                                    <ul>
                                        <li>Assisted in new development and maintenance of ASP.NET MVC e-commerce website (C# as back-end)</li>
                                        <li>New development included implementing HTML forms with client-side and server-side validation, implementing asynchronous operations in controller, retrieving information (using ADO.NET Entity Data Models and LINQ) from SQL Server database, etc.</li>
                                        <li>Maintenance included product support by responding to user requests and investigating user concerns</li>
                                        <li>Other tasks included code refactorings and adding comments in code files</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr valign="TOP">
                                <td>2016-2018</td> 
                                <td>
                                    <strong>ACS Group &mdash; New Berlin, WI</strong>
                                    <br/>              
                                    <strong>Information Systems Specialist</strong>
                                    <br/>      
                                    <ul>
                                        <li>Constructed a separate <q>Configurator</q> &mdash; an application that allows Sales and Engineering to configure any product offered by the company, generate quotes and sales orders - for each product offered by the company </li>
                                        <li>Tested inside of Microsoft Dynamics which is the platform used to launch the <q>Configurator</q>, while providing Microsoft Dynamics training to end users </li>
                                        <li>Interacted, introduced, and reviewed requirements with Sales, Engineering and Production departments to ensure proper solution is delivered in a timely manner</li>
                                    </ul>
                                </td> 
                            </tr>
                            <tr valign="TOP">
                                <td>2014-2015</td> 
                                <td>
                                    <strong>Parker Hannifin Corporation &mdash; Lincolnshire, IL</strong> 
                                    <br/>              
                                    <strong>Software Development Intern</strong>
                                    <br/>      
                                    <ul>
                                        <li>Built ASP.NET webforms application (C# for backend) for a Microsoft SQL Server database</li>
                                        <li>Hosted web application on Windows Server 2012 via IIS</li>
                                        <li>Designed barcode labels using Zebra Designer Pro software</li>
                                        <li>Answered help desk tickets and addressed any technical employee concerns related to software and/or hardware</li>
                                    </ul>
                                </td> 
                            </tr>
                            <tr valign="TOP">
                                <td>2014</td> 
                                <td>
                                    <strong>Northwestern Mutual &mdash; Milwaukee, WI</strong> 
                                    <br/>              
                                    <strong>I.T. Intern</strong>
                                    <br/>      
                                    <ul>
                                        <li>Developed interactive reports using Cognos Report Studio and tested them for format and/or data defects </li>
                                        <li>Learned SQL in order to write queries via Rapid SQL and facilitated in debugging and fixing C# code that caused an application to crash</li>
                                        <li>Used various Microsoft Office applications to collaborate and complete tasks </li>
                                    </ul>
                                </td> 
                            </tr>
                        </tbody>
                        </table>
                    </details>

                    <details>
                        <summary>Skills</summary>
                        <table id="skillstable" cellSpacing="5" cellPadding="5" width="90%" border="0">
                            <tbody>
                                <thead>
                                    <tr>
                                        <th>Programming and Scripting Languages</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <ul>                                            
                                            <li className="floatinglist">HTML</li>
                                            <li className="floatinglist">CSS</li>
                                            <li className="floatinglist">JavaScript</li>
                                            <li className="floatinglist">C#</li>
                                            <li className="floatinglist">Visual Basic</li>
                                        </ul>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>
                                        <th>Frameworks/Libraries/Runtimes</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatinglist">JavaScript Libraries
                                                <ul>
                                                    <li>jQuery</li>
                                                    <li>React (this site is built using React)</li>
                                                </ul>
                                            </li>
                                            <li className="floatinglist">ASP.NET
                                                <ul>
                                                    <li>MVC</li>
                                                    <li>Web Forms</li>
                                                </ul>
                                            </li>                                                                                        
                                            <li className="floatinglist">nodeJS
                                                <ul>
                                                    <li>Frameworks/Libraries
                                                        <ul>
                                                            <li>Express</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>
                                        <th>Databases</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatinglist">SQL Server</li>
                                            <li className="floatinglist">MySQL</li>
                                            <li className="floatinglist">MongoDB</li>
                                        </ul>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>
                                        <th>Tools</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatinglist">Visual Studio</li>
                                            <li className="floatinglist">Visual Studio Code</li>
                                            <li className="floatinglist">GitHub Desktop</li>
                                            <li className="floatinglist">Internet Information Services (IIS) Manager</li>
                                            <li className="floatinglist">SQL Server Management Studio</li>
                                            <li className="floatinglist">MySQL Workbench</li>
                                            <li className="floatinglist">MongoDB Compass</li>
                                            <li className="floatinglist">Notepad++</li>
                                            <li className="floatinglist">BeyondCompare</li>
                                            <li className="floatinglist">FileZilla</li>
                                            <li className="floatinglist">Event Viewer</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </details>

                    {/* <details id={"samples"}>
                        <summary id={"summaryProfessionalSamples"}>Links to some of my professional work</summary>
                            <table>                            
                                <thead>
                                    <tr>
                                        <th>Xpanxion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                    <ul>
                                        <li>
                                            <a href="https://www.xpanxion.com/about/careers" target="_blank" rel="noopener noreferrer">Careers</a> page for xpanxion.
                                            <ul>
                                                <li>
                                                    Clicking on any of the "+ View details" links should bring about a modal that contains an acknowledgment form for a prospective applicant to fill out before being redirected to a page containing the application for the job associated with the specific "+ View details" link you had clicked on.
                                                </li>
                                                <li>
                                                    I used jQuery extensively on this page in order to accomplish two main objectives: finding the "+ View details" links and iterating through them and for the modal. Originally, clicking on the "+ View details" links simply redirected the user to a job application but the client needed each prospective client to fill out an "acknowledgment form" before applying for their jobs. Therefore, I needed to use jQuery to select the specific link that was clicked on, save the url it was being redirected to, and then forcing a modal which I built using a jQuery plugin called "<a href="https://craftpip.github.io/jquery-confirm/" title="A jQuery plugin that provides great set of features like, Auto-close, Ajax-loading, Themes, Animations and more." target="_blank" rel="noopener noreferrer">jquery-confirm</a>" and then only redirecting the prospective applicant to the job applicant for the job they are wanting to apply for upon successful completion of the acknowledgment form.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>
                                        <th>PDCM</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                    <ul>
                                        <li>
                                            An order <a href="https://www.pdcm.com/hrconnect-legal-policy/" target="_blank" rel="noopener noreferrer">form</a> that allows a user to draw their signature on an HTML canvas. Particularly useful on mobile devices.
                                            <ul>
                                                <li>
                                                    Signature drawing functionality created using "<a href="https://github.com/szimek/signature_pad" title="A JavaScript library for drawing smooth signatures." target="_blank" rel="noopener noreferrer">signature_pad</a>".
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>
                                        <th>ISSB Bank</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                    <ul>
                                        <li>
                                            This <a href="https://www.issbbank.com/personal/banking/account-upgrade/" target="_blank" rel="noopener noreferrer">page</a> contains a form for upgrading your existing checking account.
                                            <ul>
                                                <li>
                                                    I made extensive use of JavaScript and jQuery for this form, mostly for the purposes of hiding and unhiding certain elements based on particular criteria/selections. Some examples of this are:
                                                    <ul>
                                                        <li>
                                                            Displaying an iframe when an account type is selected for the "Desired New Account Type" drowpdown field. Also, there is a different document that populates the iframe based on the account type that is selected.
                                                        </li>
                                                        <li>
                                                            Clicking the "Add Another Account" button unhides the "Another Account" fieldset and changes the button text to "Remove Another Account". Clicking "Remove Another Account" hides the fieldset and changes the button text back to "Add Another Account".
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>      
                    </details> */}
                </div>
                <br></br>
                <div style={{textAlign: "center",}}>
                    <DownloadButton file={Resume} buttonText={"DOWNLOAD RESUME"}/>
                    <br></br>
                    <br></br>
                </div>                
            </>
        }
        />);
    }
}