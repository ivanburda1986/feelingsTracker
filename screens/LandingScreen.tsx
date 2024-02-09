import {FC} from 'react';
import {View, Image, StyleSheet, Button,Text} from "react-native";
import {sharedStyles} from "../styles";
import {Colors} from "../constants/colors";


export const LandingScreen: FC = () => {
    return (
<View style={styles.landingScreen}>
    <Text style={sharedStyles.header1}>Feelings</Text>
    <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
    <View style={styles.buttonContainer}>
        <Button title={"Register"} color="seagreen"/>
    </View>
    <View style={styles.buttonContainer}>
        <Button title={"Login"} color="darkseagreen"/>
    </View>
</View>
    );
};

const styles = StyleSheet.create({
    landingScreen:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
        backgroundColor:Colors.bgSecondary

    },
    logo:{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 10,
        borderColor: 'seagreen',
    },
    buttonContainer:{
        width: "80%",
        borderRadius: 10,
        overflow:"hidden",
        marginBottom: 10
    }
})