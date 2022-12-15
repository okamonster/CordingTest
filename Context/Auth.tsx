import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ProfilePage } from "../components/pages/ProfilePage";
import { SignUpPage } from "../components/pages/SignUpPage";
import { auth } from "../firebase";

type Context = {
  currentUser: User | null | undefined;
};

export const AuthContext = createContext<Context>({ currentUser: undefined });

export const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
