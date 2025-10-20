import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
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

    const informationms = {
     userCreat,
     profileUpdeat,
     emailVerifecationsCode
    }
    return <AuthContext.Provider value={informationms}>{children}</AuthContext.Provider>
};

export default ContextProvider;