import {FC, useContext, useState} from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import {LoginForm} from "./LoginForm";
import {sharedStyles} from "../styles";
import {AuthContext} from "../store/AuthContextProvider";
import {LoadingOverlay} from "../components/LoadingOverlay";
import {Credentials} from "./RegisterScreen";
import {loginUser} from "../utils/authenticate";

export const LoginScreen: FC = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authContext = useContext(AuthContext);

    const loginHandler = async({email, password}:Credentials) => {
        setIsAuthenticating(true);

        try{
            const token = await loginUser({email, password});
            authContext?.authenticate(token);
        }catch(error){
            Alert.alert("Authentication failed", "Cannot login. Please check credentials")
        }
        setIsAuthenticating(false);

    };

    if(isAuthenticating){
        return <LoadingOverlay message={"Logging you in ..."}/>
    }

    return(<View style={styles.LoginScreen}>
        <Text style={sharedStyles.header1}>Login</Text>
        <LoginForm /></View>)
};

const styles = StyleSheet.create({
    LoginScreen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})