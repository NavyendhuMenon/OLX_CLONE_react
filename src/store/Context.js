
// import { createContext} from "react";

import { onAuthStateChanged } from "firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";



export const FirebaseContext= createContext(null)

export const AuthContext = createContext(null)



export default function Context ({children}){

    const {auth, storage} = useContext (FirebaseContext)

    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser({
                    name : currentUser.displayName || 'User' ,
                    email : currentUser.email,
                })
            }else{
                setUser(null) //when user get signed out
            }
        })
    

      return () => unsubscribe() // Cleanup the listener
      }, [auth]
    );

    return(
        <AuthContext.Provider value ={{user, setUser, storage}}>

            {children}
          
        </AuthContext.Provider>
    )
}