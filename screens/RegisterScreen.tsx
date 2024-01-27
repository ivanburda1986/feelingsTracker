import {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {RegisterForm} from "./RegisterForm";
import {sharedStyles} from "../styles";

export const RegisterScreen: FC = () => {
 return(<View style={styles.RegisterScreen}>
  <Text style={sharedStyles.header1}>Register</Text>
  <RegisterForm/></View>)
};

const styles = StyleSheet.create({
 RegisterScreen:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
 }
})