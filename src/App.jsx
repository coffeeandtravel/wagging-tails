import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import SignIn from "./Pages/Sign-in/SignIn";
import Footer from "./components/Footer";

const Layout = () =>{
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
]);
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
