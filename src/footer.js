import React from "react";
import ContactForm from "./components/contactform";
import SocialMediaBanner from "./components/socialmediabanner";

export default class Footer extends React.Component
{
    render()
    {
        return (
            <footer>
                <hr/>
                <table width={"100%"}>
                  <tr>
                    <td style={{textAlign: "left",}}>
                      <ContactForm/>
                      <br></br>
                      <p>Copyright &copy; <span id="fullyear"></span> Sameer Rizvi</p>
                      <script>document.getElementById("fullyear").innerHTML = new Date().getFullYear();</script>
                      <br></br>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td>
                      <div style={{textAlign: "right", verticalAlign: "top", top:0,}}>
                          <SocialMediaBanner/>  
                      </div>
                    </td>
                </tr>
            </table>
          </footer>
        );
    }
}