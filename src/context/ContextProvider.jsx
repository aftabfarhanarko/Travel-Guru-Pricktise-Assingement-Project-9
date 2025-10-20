import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/fierbase.coinfig';

export const AuthContext = createContext(null); 

const ContextProvider = ({children}) => {

   const userCreat = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const profileUpdeat = (displayName) => {
    return updateProfile(auth.currentUser,displayName);
   }
   const emailVerifecationsCode = () => {
    return sendEmailVerification(auth.currentUser);
   }

   const userLogingNow = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
   }

    const informationms = {
     userCreat,
     profileUpdeat,
     emailVerifecationsCode,
     userLogingNow
    }
    return <AuthContext.Provider value={informationms}>{children}</AuthContext.Provider>
};

export default ContextProvider;