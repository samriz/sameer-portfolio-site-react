import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./components/footer";
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Index extends React.Component
{
    render()
    {
        return (
            <>
                <Menu/>
                <Home/>
                <About/>
                <Contact/>
                <Footer/>               
            </>
        );
    }
}

export class App extends React.Component
{
    render()
    {
        return (<BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
            </Routes>
          </BrowserRouter>);
    }
}

// create the root using the element of id "root" in index.html
// add "App" to the root
// App render the "Index" component at the index url
// Index is a single page and renders all the components in the page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);