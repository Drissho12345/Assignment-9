
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile  } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();


    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }


    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
       
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // github
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        loginUser,
        user,
        setUser,
        googleLogin,
        logOut,
        githubLogin,
     
        
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
            setUser(null);
            }
          });
          return () => {
            unsubscribe();
          }
 
    }, [])
    
    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};
export default AuthProvider;
