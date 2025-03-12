import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <App /> */}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
