import {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {sharedStyles} from "../styles";


export const ProfileScreen: FC = () => {
    return (
        <View style={styles.profileScreen}>
            <Text style={sharedStyles.header1}>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    profileScreen:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'azure'

    },
    buttonContainer:{
        width: "80%",
        borderRadius: 10,
        overflow:"hidden",
        marginBottom: 10
    }
})