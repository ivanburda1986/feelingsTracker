import {createContext, FC, ReactNode, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
    token: string|null;
    isAuthenticated: boolean;
    authenticate: (token:string)=>void;
    logout: ()=>void;
}


export const AuthContext = createContext<AuthContextType|undefined>({
    token: null,
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

interface Props{
    children: ReactNode;
}

export const AuthContextProvider: FC<Props> = ({children}) => {
    const [authToken, setAuthToken] = useState<string|null>(null);

    function authenticate(token:string) {
        setAuthToken(token);
        AsyncStorage.setItem("token", token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem("token");
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}