import React from "react";
import { createContext } from "react";

const Authcontext = createContext();

const AuthProvider = () => {
  return <Authcontext.Provider value></Authcontext.Provider>;
};

export default AuthProvider;
