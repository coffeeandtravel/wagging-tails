import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "./Pages/Sign-in/SignIn";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Homepage/>
    },
    {
      path:'/sign-in',
      element: <SignIn/>
    }
  ]
)
function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </>
  );
}

export default App;
