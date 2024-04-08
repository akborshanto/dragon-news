import { createBrowserRouter } from "react-router-dom";
import Roots from './../rootLayout/Root';
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Regester from "../pages/regester/Regester";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import NewsPages from "../pages/newsPages/NewsPages";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const routers=createBrowserRouter([
{
    path:'/',
    element:<Roots></Roots>,
children:[

{
    path:'/',
    element:<Home></Home>,
    loader:()=>fetch('news.json')
   
},
{
path:'/anews/:id',
element:<PrivateRoutes><NewsPages></NewsPages></PrivateRoutes>
},
{
    path:'/login',
    element:<Login></Login>
},
{path:'/regester',
element:<Regester></Regester>
},
{
    path:'/about',
    element:<About></About>
},
{
    path:'/career',
    element:<Career></Career>
}

]


}

])
export default routers