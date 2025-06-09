import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile=(user)=>{
    return updateProfile(auth.currentUser,user)
  }
  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    createUser,
    updateUserProfile,
    loginUser,
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
