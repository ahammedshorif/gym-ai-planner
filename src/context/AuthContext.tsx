import {createContext, useContext, useState,useEffect} from "react";
import type { User } from "../types";
import {authClient} from "../lib/auth"

interface AuthContextType {
    user: User | null;
    setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
       async function fetchUser(){
            try{
                const response = await authClient.getSession();
                 
                if(response && response.data?.user){
                    setUser(response.data.user);
                } else{
                    setUser(null)
                }
                
            }catch (error){
                console.error("Error fetching user:", error);
            }
            

       }
         fetchUser();
    }, []);


    return <AuthContext.Provider value={{ user: setUser }}>{children}</AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}