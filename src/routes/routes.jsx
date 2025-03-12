import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import SignIn from "../Pages/Sign-in/SignIn";
import SignUp from "../Pages/Sign-in/SignUp";
import AdoptionPage from "../Pages/Adoption Page/AdoptionPage";
import Post from "../Pages/PostAdoption/Post";
import Test from "../Pages/Test";
import DogInfo from "../Pages/Adoption Page/DogInfo";
import YourPosts from "../Pages/Your Posts/YourPosts";
import NotFound from "../Pages/NotFound/NotFound";
import Privateroute from "../Pages/Privateroute";
import Edit from "../EditPage/Edit";
import About from "../Pages/FooterPages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "/adopt", element: <AdoptionPage /> },
            { path: "*", element: <NotFound /> },
            {path:'about', element:<About/>}
        ],
    },
    {
        path: "/user",
        element: <Privateroute />, // ✅ Now used correctly
        children: [
            {
                path: "adopt/:id",
                element: <DogInfo />,
                loader: async ({ params }) => {
                    const response = await fetch(`http://localhost:3000/pets/${params.id}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching data: ${response.status}`);
                    }
                    return response.json();
                }
            },
            { path: "your-posts", element: <YourPosts /> },
            { path: "post-adoption", element: <Post /> },
            { path: "test", element: <Test /> },
            {path:"edit/:id", element:<Edit/>}
        ]
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    }
]);

export default router;
