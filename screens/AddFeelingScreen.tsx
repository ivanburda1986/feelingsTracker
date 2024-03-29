import {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {sharedStyles} from "../styles";


export const AddFeelingScreen: FC = () => {
    return (
        <View style={styles.addFeelingScreen}>
            <Text style={sharedStyles.header1}>Add Feeling</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    addFeelingScreen:{
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