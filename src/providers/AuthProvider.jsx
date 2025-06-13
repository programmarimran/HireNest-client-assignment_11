import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (user) => {
    setLoading(true);
    return updateProfile(auth.currentUser, user);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // sent jwt user token
      axios
        .post(`${import.meta.env.VITE_BasicServer}/jwt`, currentUser,{withCredentials:true})
        .then((res) => console.log(res.data))
        .catch(error=>console.log(error));
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    updateUserProfile,
    loginUser,
    loginUserWithGoogle,
    logoutUser,
    loading,
    setLoading,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
