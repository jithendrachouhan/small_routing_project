import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import Home from "../components/Home";
import Auth from "../components/Auth";
import UnAuth from "../components/UnAuth";
import Admin from "../components/Admin";
import Normal from "../components/Normal";
import Super from "../components/Super";
import ProtectedRoute from "./ProtectedRoute";
import { USER_TYPE } from "./constants";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/auth',
                element: <Auth/>
            },
            {
                path: '/unAuth',
                element: <UnAuth/>
            },
            {
                element: <ProtectedRoute accessID={[USER_TYPE.NORMAL,USER_TYPE.SUPER,USER_TYPE.ADMIN]} />,
                children: [
                    {
                        path: '/normal',
                        element: <Normal/>
                    },
                ]
            },
            {
                element: <ProtectedRoute accessID={[USER_TYPE.SUPER,USER_TYPE.ADMIN]} />,
                children: [
                    {
                        path: '/admin',
                        element: <Admin/>
                    },
                ]
            },
            {
                element: <ProtectedRoute accessID={[USER_TYPE.SUPER]} />,
                children: [
                    {
                        path: '/super',
                        element: <Super/>
                    },
                ]
            }
            
        ]
    }
])


export default Router;