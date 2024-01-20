import {FC} from 'react';
import {View, Image, StyleSheet, Button,Text} from "react-native";


export const LandingPage: FC = () => {
    return (
<View style={styles.landingPage}>
    <Text style={styles.headerText}>Feelings</Text>
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

    landingPage:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
        backgroundColor:'azure'

    },
    headerText:{
      fontSize: 42,
        marginBottom: 10,
        color: 'seagreen'
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