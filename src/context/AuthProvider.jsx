import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../config/firebase.config";
import { createContext, useEffect, useState } from "react";

//Intialize auth
const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with mail and password
  const createUser = async (mail, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      console.error("Sign-up Error", error.message);
    } finally {
      setLoading(false); // Ensures loading is set to false, regardless of success or failure
    }
  };

  //login with email and password
  const login = async (mail, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      console.error("Sign-in Error", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //login with google
  const loginWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Sign-in Error", error.message);
    }
  };

  //signout user
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Log-out Error", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    login,
    loginWithGoogle,
    logOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

