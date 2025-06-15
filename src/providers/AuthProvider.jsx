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
import { toast } from "react-toastify";
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
  // const logoutUser = () => {
  //   return signOut(auth).then(() => {
  //     axios
  //       .post(
  //         `${import.meta.env.VITE_BasicServer}/logout`,
  //         {},
  //         { withCredentials: true }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data.status) {
  //           toast.info("Logged out successfully. See you again!");
  //         }
  //       });
  //   });
  // };
  const logoutUser = () => {
    axios
      .post(
        `${import.meta.env.VITE_BasicServer}/logout`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.status) {
          signOut(auth).then(() => {
            setUser("");
            toast.info("Logged out successfully. See you again!");
          });
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error) {
          toast.info("logout failed");
        }
      });
  };
  // console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        axios
          .post(`${import.meta.env.VITE_BasicServer}/jwt`, currentUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            // setUser(currentUser)
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user)
  const userInfo = {
    user,
    setUser,
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
