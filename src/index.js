import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import { App } from './App';

const root = document.querySelector('#root');

ReactDOM.createRoot(root).render(
    <>
        <App />
    </>
);

