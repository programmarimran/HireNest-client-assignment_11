import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile=(user)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,user)
  }
  const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logoutUser=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  const userInfo = {
    user,
    createUser,
    updateUserProfile,
    loginUser,
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
