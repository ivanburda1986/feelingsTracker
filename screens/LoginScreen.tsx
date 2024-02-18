import {FC, useContext, useState} from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";
import {LoginForm} from "./LoginForm";
import {sharedStyles} from "../styles";
import {AuthContext} from "../store/AuthContextProvider";
import {LoadingOverlay} from "../components/LoadingOverlay";
import {Credentials} from "./RegisterScreen";
import {loginUser} from "../utils/authenticate";
import {Colors} from "../constants/colors";
import {useNavigation} from "@react-navigation/native";

import type {RootStackParamList} from '../types/types';
import {StackNavigationProp} from "@react-navigation/stack";

export const LoginScreen: FC = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
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

    return(<View style={styles.landingScreen}>
            <Text style={sharedStyles.header1}>Feelings</Text>
            <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
        <LoginForm onAuthenticate={loginHandler} />
    </View>)
};

const styles = StyleSheet.create({
    LoginScreen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    landingScreen:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.bgSecondary

    },
    logo:{
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 7.5,
        borderColor: 'seagreen',
    },
    buttonContainer:{
        width: "80%",
        borderRadius: 10,
        overflow:"hidden",
        marginBottom: 10
    }
})