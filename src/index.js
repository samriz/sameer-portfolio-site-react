import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from "./menu.js";
import Footer from "./footer.js";

class IndexIntro extends React.Component{
  
}

class Index extends React.Component
{
    render()
    {
        return (
          <div>
              <div className="allButFooter"><Menu/></div>
              <Footer/>
          </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);