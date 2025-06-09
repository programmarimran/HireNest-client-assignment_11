import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
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
  const logoutUser=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
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
