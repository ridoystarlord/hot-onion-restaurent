import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuth from "../components/Shared/UserAuthentication/Firebase/firebase.init";
import { getDatabase, ref, set, onValue } from "firebase/database";

initializationAuth();
const auth = getAuth();
const database = getDatabase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const resgisterEmailPasswordAuth = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginEmailPasswordAuth = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        readDatabase(user, user.uid);
      } else {
        setUser({});
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log("Failed");
      });
  };

  const writeDatabase = (name, email, password, uid) => {
    set(ref(database, "users/" + uid), {
      email: email,
      password: password,
      name: name,
    });
  };

  const readDatabase = (user, uid) => {
    const userdata = ref(database, "users/" + uid);
    onValue(userdata, (snapshot) => {
      const data = snapshot.val();
      user.displayName = data.name;
      setUser(user);
    });
  };

  return {
    user,
    setUser,
    resgisterEmailPasswordAuth,
    logout,
    loginEmailPasswordAuth,
    writeDatabase,
  };
};

export default useFirebase;
