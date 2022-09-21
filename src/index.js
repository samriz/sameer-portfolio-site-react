import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

export default class App extends React.Component
{
    render()
    {
      //use react router to route to pages based on URL
        return (<BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="contact" element={<ContactPage/>}/>        
            </Routes>
          </BrowserRouter>);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);