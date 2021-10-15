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
  const resgisterEmailPasswordAuth = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        writeDatabase(name, email, password, user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const loginEmailPasswordAuth = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        readDatabase(user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUser(user);
        readDatabase(user.uid);
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

  const readDatabase = (uid) => {
    const userdata = ref(database, "users/" + uid);
    onValue(userdata, (snapshot) => {
      const data = snapshot.val();
      //user.name = data.name;
      setUser(data);
    });
  };

  return { user, resgisterEmailPasswordAuth, logout, loginEmailPasswordAuth };
};

export default useFirebase;
