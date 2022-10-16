import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

export default class App extends React.Component
{
    render()
    {
        return (<BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>}/>
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