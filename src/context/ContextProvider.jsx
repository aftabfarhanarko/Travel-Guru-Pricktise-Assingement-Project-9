import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile,GoogleAuthProvider, signInWithPopup,GithubAuthProvider, onAuthStateChanged, signOut   } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/fierbase.coinfig';

export const AuthContext = createContext(null); 

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const ContextProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loding, setLoding] = useState(true);
 
   const userCreat = (email, password) => {
      setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const profileUpdeat = (displayName) => {
       setLoding(true)
    return updateProfile(auth.currentUser,displayName);
   }
   const emailVerifecationsCode = () => {
       setLoding(true)
    return sendEmailVerification(auth.currentUser);
   }

   const userLogingNow = (email, password) => {
       setLoding(true)
    return signInWithEmailAndPassword(auth, email, password);
   }

   const resetEmil = (email) => {
       setLoding(true)
      return sendPasswordResetEmail(auth, email);
   }

   const googleSignUpUser = () => {
       setLoding(true)
      return signInWithPopup(auth, googleProvider);
   }
   const githubLogingUser = () => {
       setLoding(true)
      return  signInWithPopup(auth, githubProvider)
   }

   const myUserSignOut = () => {
      setLoding(true);
      return signOut(auth);
   }
    const informationms = {
     userCreat,
     profileUpdeat,
     emailVerifecationsCode,
     userLogingNow,
     resetEmil,
     googleSignUpUser,
     githubLogingUser,
     user,
     loding,
     myUserSignOut
    };

    useEffect(() => {
      const unsubCripet = onAuthStateChanged(auth, (currentUser) =>{
         setUser(currentUser);
         setLoding(false);
      });

      return () => {
         unsubCripet();
      }
    } ,[])
    return <AuthContext.Provider value={informationms}>{children}</AuthContext.Provider>
};

export default ContextProvider;