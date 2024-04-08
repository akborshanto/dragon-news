import React from 'react'
import ReactDOM from 'react-dom/client'
import routers from './Routes/Routess';

import './index.css'
import {


  RouterProvider,
} from "react-router-dom";
import AuthProvider from './hook/authProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={routers}></RouterProvider>


</AuthProvider>

  </React.StrictMode>,
)
