
import React,{lazy, Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Offer from './components/Offer';
import Error from './components/Error';
import Cart from './components/Cart';
import RestraurantMenu from './components/RestraurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import LazyInstaMart from "./components/LazyInstaMart"; 
import store from './store';
import Login from "./components/Login";
import { Provider } from 'react-redux';
const InstaMart=lazy(()=>
    import("./components/InstaMart")
);

const Appfunction = () => {
    return (
        <>
            <Provider store={store}>
            <Header />
            <Outlet/>
            <Footer />
            </Provider>
        </>
    );
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Appfunction/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            }
            ,
            {
        path:"/offer",
        element:<Offer/>
            }
            ,
            {
        path:"/cart",
        element:<Cart/>
            }
             ,
            {
        path:"/restraurant/:id",
        element:<RestraurantMenu/>
            },
             {
  path: "/instamart",
  element: <LazyInstaMart />, 
},
{
  path: "/login",
  element: <Login />, 
}
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);