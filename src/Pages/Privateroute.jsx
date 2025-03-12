import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privateroute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return user ? <><Navbar/><Outlet /><Footer/></> : <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default Privateroute;
