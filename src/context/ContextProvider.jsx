import React, { createContext } from 'react';

export const AuthContext = createContext(null); 

const ContextProvider = ({children}) => {



    const informationms = {
      name:"Farhan Arko",
    }
    return <AuthContext.Provider value={informationms}>{children}</AuthContext.Provider>
};

export default ContextProvider;