import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(false)
  
  // Create User with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Google SignIn
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // SignIn with email & password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Logout
  const logout = () => {
    setRole(null)
    setLoading(true);
    localStorage.removeItem("OldRuby-Token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(()=>{
    fetch(`http://localhost:5000/user/${user?.email}`,{
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
    })
    .then(res => res.json())
    .then(data => setVerificationStatus(data?.seller_verification))
  },[user])

  // console.log('Status', verificationStatus);

  const value = {
    user,
    createUser,
    updateUserProfile,
    signInWithGoogle,
    signIn,
    resetPassword,
    logout,
    loading,
    setLoading,
    role,
    setRole,
    verificationStatus
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
