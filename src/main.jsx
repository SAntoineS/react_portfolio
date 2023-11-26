import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/pro-solid-svg-icons';

import {far} from '@fortawesome/pro-regular-svg-icons';

import {fab} from '@fortawesome/free-brands-svg-icons';

import {fal} from '@fortawesome/pro-light-svg-icons';
import {fat} from '@fortawesome/pro-thin-svg-icons';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {fass} from '@fortawesome/sharp-solid-svg-icons';

/* add icons to the library */
library.add(fas, far, fab, fal, fat, fad, fass)

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
