import React from "react";
//import ContactForm from "./components/contactform";
import SocialMediaBanner from "./components/socialmediabanner";

export default class Footer extends React.Component
{
    render()
    {
        return (
          <footer style={{textAlign: "center",}}>
            <hr/>
              <div>
                <SocialMediaBanner/>
                <p>Copyright &copy; <span id="fullyear"></span> Sameer Rizvi</p>
                {/* <script>document.getElementById("fullyear").innerHTML = new Date().getFullYear();</script> */}
              </div>
          </footer>
        );
    }
}