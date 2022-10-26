import React from "react";
import SocialMediaBanner from "./socialmediabanner";

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
              </div>
          </footer>
        );
    }

    componentDidMount() //executed after component has been added to the DOM
    {
      document.getElementById("fullyear").innerHTML = new Date().getFullYear();
    }
}