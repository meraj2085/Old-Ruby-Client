import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Register from '../Pages/Authentication/Register';
import SignIn from '../Pages/Authentication/SignIn';
import Home from '../Pages/Home/Home';
export const router = createBrowserRouter([
     {
       path: '/',
       element: <Main></Main>,
       children: [
         {
           path: '/',
           element: <Home></Home>
         },
         {
           path: '/signIn',
           element: <SignIn></SignIn>
         },
         {
           path: '/register',
           element: <Register></Register>
         }
       ]
     }
   ])