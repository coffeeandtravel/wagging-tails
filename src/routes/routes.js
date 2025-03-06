import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import SignIn from "../Pages/Sign-in/SignIn";
import AdoptionPage from "../Pages/Adoption Page/AdoptionPage";
import Test from "../Pages/Test";
import DogInfo from "../Pages/Adoption Page/DogInfo";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path: '/', element:<Homepage/>},
            {path:'/sign-in', element:<SignIn/>},
            {path: '/adopt', element:<AdoptionPage/>},
            {path: '/test', element:<Test/>},
            {path: '/adopt/:id', element:<DogInfo/>, loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)}
        ],
    }
]);

export default router;