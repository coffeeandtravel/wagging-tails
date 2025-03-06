import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import SignIn from "./Pages/Sign-in/SignIn";
import Footer from "./components/Footer";
import AdoptionPage from "./Pages/Adoption Page/AdoptionPage";
import Post from "./Pages/PostAdoption/Post";
import Test from "./Pages/Test";
import DogInfo from "./Pages/Adoption Page/DogInfo";
import SignUp from "./Pages/Sign-in/SignUp";

const Layout = () =>{
  return(
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
)}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/adopt", element: <AdoptionPage/> },
      { path: "/post-adoption", element: <Post/> },
      { path: "/test", element: <Test/> },
      {path:'/adopt/:id', element:<DogInfo/>, loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)}
      // {path:'/adopt/single', element:<DogInfo/>}
    ],
  },
]);
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
