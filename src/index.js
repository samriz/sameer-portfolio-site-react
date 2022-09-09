import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import PageTemplate from './pagetemplate';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageTemplate 
    intro_content={<h1>Sameer Rizvi</h1>}
    main_content={<>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
        </>}
    />);