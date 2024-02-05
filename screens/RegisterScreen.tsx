import {FC, useContext, useState} from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import {RegisterForm} from "./RegisterForm";
import {sharedStyles} from "../styles";
import {AuthContext} from "../store/AuthContextProvider";
import {LoadingOverlay} from "../components/LoadingOverlay";
import {createUser} from "../utils/authenticate";

export interface Credentials {
 email:string;
 password: string;
}

export interface RegisterCredentials {
    email:string;
    password: string;
    username: string;
}

export const RegisterScreen: FC = () => {
 const [isAuthenticating, setIsAuthenticating] = useState(false);
 const authContext = useContext(AuthContext);

 const signupHandler = async({email, password, username}:RegisterCredentials) => {
   setIsAuthenticating(true);
   try{
     const token = await createUser({email, password,username});
     authContext?.authenticate(token)
   }catch (error){
     Alert.alert("User creation failed","Cannot create a new user. Please check entered data and try again.")
     setIsAuthenticating(false)
   }
 };

 if(isAuthenticating){
  return <LoadingOverlay message={"Creating a user..."}/>
 }

 return(<View style={styles.RegisterScreen}>
  <Text style={sharedStyles.header1}>Register</Text>
  <RegisterForm onSubmit={signupHandler}/></View>)
};

const styles = StyleSheet.create({
 RegisterScreen:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
 }
})